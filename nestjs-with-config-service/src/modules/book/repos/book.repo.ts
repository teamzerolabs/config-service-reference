import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "../entities/Book";

@Injectable()
export class BookRepo {
  constructor(
    @InjectRepository(Book) private readonly repository: Repository<Book>
  ) {}

  async getBooks(): Promise<Book[]> {
    return this.repository.find();
  }

  async getBookById(id: number): Promise<Book | undefined> {
    return this.repository.findOne(id);
  }

  async createBook(data: {
    name: string;
    author: string;
    publishedDate: Date;
  }): Promise<Book> {
    return this.repository.save({
      name: data.name,
      author: data.author,
      publishedDate: data.publishedDate
    });
  }
}
