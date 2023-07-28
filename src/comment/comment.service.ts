import { Prisma, Comment } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentService {
    constructor(private prismaService: PrismaService) { }

    async findAllComments(): Promise<Comment[]> {
        return this.prismaService.comment.findMany();
    }

    async findCommentById(id: number): Promise<Comment | null> {
        return this.prismaService.comment.findUnique({
            where: {
                id: id,
            },
            include: {
                author: true,
                article: true,
            }
        })
    }

    async createComment(data: Prisma.CommentCreateInput): Promise<Comment> {
        return this.prismaService.comment.create({
            data: data,
        });
    }

    async updateComment(id: number, data: Prisma.CommentUpdateInput): Promise<Comment> {
        return this.prismaService.comment.update({
            where: {
                id: id,
            },
            data: data,
        })
    }

    async deleteComment(id: number): Promise<Comment> {
        return this.prismaService.comment.delete({
            where: {
                id: id,
            }
        })
    }

}