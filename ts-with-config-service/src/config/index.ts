import { parseEnv, parseEnvNumber } from "./util";
import * as dotenv from "dotenv";

let env = process.env.NODE_ENV;
if (env !== "production") {
  // Development will use .env, anything else will use .env.<NODE_ENV>
  if (env === "development") {
    env = "";
  }

  const path = `src/config/.env${env ? `.${env}` : ""}`;
  // Well, it's better to use winston logger, perhaps we can cover in another tutorial
  console.log(`Loading config from environment file ${path}`);
  dotenv.config({ path });
}

export type ConfigProperties = {
  app: {
    port: number;
  };
  mysql: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
};

const config: ConfigProperties = {
  app: {
    port: parseEnvNumber("APP_PORT", 3000)
  },
  mysql: {
    host: parseEnv("DATABASE_URL"),
    port: parseEnvNumber("DATABASE_PORT", 3306),
    username: parseEnv("DATABASE_USERNAME"),
    password: parseEnv("DATABASE_PASSWORD"),
    database: parseEnv("DATABASE_NAME")
  }
};

export default config;
