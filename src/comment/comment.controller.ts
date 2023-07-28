import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Prisma, Comment } from "@prisma/client";
import { CommentService } from "./comment.service";

@Controller('comment')
export class CommentController {

    constructor(private readonly commentService: CommentService) { }

    @Get()
    async getAllComments(): Promise<Comment[]> {
        return this.commentService.findAllComments();
    }

    @Get(':id')
    async getCommentById(@Param('id') id: string): Promise<Comment> {
        return this.commentService.findCommentById(Number(id));
    }

    @Post()
    async createComment(@Body() data: Prisma.CommentCreateInput): Promise<Comment> {
        return this.commentService.createComment(data);
    }

    @Delete(':id')
    async deleteComment(@Param('id') id: string): Promise<Comment> {
        return this.commentService.deleteComment(Number(id));
    }

    @Put(':id')
    async updateComment(@Param('id') id: string, @Body() data: Prisma.CommentUpdateInput): Promise<Comment> {
        return this.commentService.updateComment(Number(id), data);
    }

}