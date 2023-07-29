import { PrismaService } from "src/prisma.service";
import { Injectable } from "@nestjs/common";
import { User, Prisma } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    async findAllUsers(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    async getUserById(id: number): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: {
                id: id,
            },
            include: {
                articles: true,
                comments: true,
            }
        })
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prismaService.user.create({
            data: data,
        });
    }

    async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
        return this.prismaService.user.update({
            where: {
                id: id,
            },
            data: data,
        })
    }

    async deleteUser(id: number): Promise<User> {
        const user = await this.prismaService.user.findUnique({ where: { id } });

        if (!user) {
            // User not found, return null or appropriate response
            return null;
        }

        return this.prismaService.user.delete({
            where: {
                id: id,
            }
        })
    }

}