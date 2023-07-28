import { Prisma, Article } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ArticleService {
    constructor(private prismaService: PrismaService) { }

    async findAllArticles(): Promise<Article[]> {
        return this.prismaService.article.findMany();
    }

    async getArticleById(id: number): Promise<Article | null> {
        return this.prismaService.article.findUnique({
            where: {
                id: id,
            },
            include: {
                author: true,
            }
        })
    }

    async createArticle(data: Prisma.ArticleCreateInput): Promise<Article> {
        return this.prismaService.article.create({
            data: data,
        });
    }

    async updateArticle(data: Prisma.ArticleUpdateInput, id: number): Promise<Article> {
        return this.prismaService.article.update({
            where: {
                id: id,
            },
            data: data,
        })
    }

    async deleteArticle(id: number): Promise<Article> {
        return this.prismaService.article.delete({
            where: {
                id: id,
            }
        });
    }
}