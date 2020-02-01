import { BookModule } from "../book/book.module";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookController } from "./controllers/book.controller";

@Module({
  imports: [BookModule],
  controllers: [BookController],
  providers: []
})
export class V1Module implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    // TODO: Cover these middleware in later articles
    // consumer
    // .apply(
    //   HelmetMiddleware,
    //   RequestContextMiddleware,
    //   MorganMiddleware,
    //   BodyParserMiddleware
    // )
    // .forRoutes({ path: "/api", method: RequestMethod.ALL });
  }
}
