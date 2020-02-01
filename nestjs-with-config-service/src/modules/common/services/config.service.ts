import { Injectable } from "@nestjs/common";
import {
  AppConfig,
  ConfigProperties,
  MYSQLConfig
} from "../types/config.types";
import { parseEnv, parseEnvNumber } from "../utils/parse-env";
import * as dotenv from "dotenv";
import { logger } from "../../../util/logger";

/**
 * The root of the service, everything else depends on this.
 */
@Injectable()
export class ConfigService {
  private readonly config: ConfigProperties;

  constructor() {
    let env = process.env.NODE_ENV;
    if (env !== "production") {
      // Development will use .env, anything else will use .env.<NODE_ENV>
      if (env === "development") {
        env = "";
      }

      const path = `src/config/.env${env ? `.${env}` : ""}`;
      logger.info(`Loading config from environment file ${path}`);
      dotenv.config({ path });
    }

    this.config = {
      app: {
        port: parseEnvNumber("APP_PORT")
      },
      mysql: {
        host: parseEnv("DATABASE_URL"),
        port: parseInt(parseEnv("DATABASE_PORT", "3306"), 10),
        username: parseEnv("DATABASE_USERNAME"),
        password: parseEnv("DATABASE_PASSWORD"),
        database: parseEnv("DATABASE_NAME")
      }
    };
  }

  get app(): AppConfig {
    return this.config.app;
  }

  get mysql(): MYSQLConfig {
    return this.config.mysql;
  }
}
