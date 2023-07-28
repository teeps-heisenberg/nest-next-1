import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User, Prisma } from "@prisma/client";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User | null> {
        return this.userService.getUserById(Number(id));
    }

    @Post()
    async createUser(@Body() data: Prisma.UserCreateInput): Promise<User> {
        return this.userService.createUser(data);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput): Promise<User> {
        return this.userService.updateUser(Number(id), data);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return this.userService.deleteUser(Number(id));
    }

}