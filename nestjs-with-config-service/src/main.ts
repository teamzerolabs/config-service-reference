import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { logger } from "./util/logger";
import { ConfigService } from "./modules/common/common.module";
import { Response } from "express";

export async function createApp() {
  const app = await NestFactory.create(AppModule);

  // Send 204 for requests to /
  app.getHttpAdapter().get("/", (_, res: Response) => {
    res.sendStatus(204);
  });

  app.enableCors();

  // Set up validation
  // Cover in later article
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     exceptionFactory: validationErrorFactory,
  //   })
  // )

  return app;
}

let app: INestApplication;
createApp()
  .then(async createdApp => {
    app = createdApp;
    const configService: ConfigService = app.get(ConfigService);

    await app.listen(configService.app.port, () =>
      logger.info(
        `Book example server listening on port ${configService.app.port}`
      )
    );
  })
  .catch(async err => {
    logger.error(`Failed to start server`);
    logger.error(err);

    if (app) {
      await app.close();
    }

    process.exit(1);
  });
