import { NestFactory } from "@nestjs/core";
import { AppModule } from "../src/app.module";
import { BookRepo } from "../src/modules/book/repos/book.repo";
import { logger } from "../src/util/logger";

async function seedBooks() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  try {
    const bookRepo: BookRepo = app.get(BookRepo);

    const books = [
      {
        name: "The Book of Five Rings",
        author: "Miyamoto Musashi",
        publishedDate: new Date(1645, 0, 1)
      },
      {
        name: "The Art of War",
        author: "Sun Tzu",
        // Right, I know this was published in BC, but mysql doesn't handle that!
        publishedDate: new Date(500, 0, 1)
      },
      {
        name: "Language in Thought and Action",
        author: "S. I. Hayakawa",
        publishedDate: new Date(1949, 0, 1)
      }
    ];

    for (const bookData of books) {
      await bookRepo.createBook(bookData);
    }

    const bookRecords = await bookRepo.getBooks();
    logger.info(`Seeded ${bookRecords.length} books!`);
  } catch (e) {
    throw e;
  } finally {
    await app.close();
  }
}

seedBooks()
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    logger.error(err.message);
  });
