import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { Prisma, Article } from "@prisma/client";



@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }

    @Get()
    async getAllArticles(): Promise<Article[]> {
        return this.articleService.findAllArticles();
    }

    @Get(':id')
    async getArticleById(@Param('id') id: string): Promise<Article | null> {
        return this.articleService.getArticleById(Number(id));
    }

    @Post()
    async createArticle(@Body() data: Prisma.ArticleCreateInput): Promise<Article> {
        return this.articleService.createArticle(data);
    }

    @Delete(':id')
    async deleteArticle(@Param('id') id: string): Promise<Article> {
        return this.articleService.deleteArticle(Number(id));
    }

    @Put(':id')
    async updateArticle(@Param('id') id: string, @Body() data: Prisma.ArticleUpdateInput): Promise<Article> {
        return this.articleService.updateArticle(data, Number(id));
    }
}
