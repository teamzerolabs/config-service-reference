import { BookRepo } from "./repos/book.repo";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Book } from "./entities/Book";
import { Module } from "@nestjs/common";

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookRepo],
  exports: [BookRepo]
})
export class BookModule {}

export { BookRepo };
