import { Controller, Get } from "@nestjs/common";
import { BookRepo } from "../../book/repos/book.repo";

@Controller({ path: "/books" })
export class BookController {
  constructor(private readonly bookRepo: BookRepo) {}

  @Get("/")
  async getBooks() {
    return this.bookRepo.getBooks();
  }
}
