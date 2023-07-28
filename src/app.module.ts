import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';


@Module({
  imports: [UserModule, ArticleModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
