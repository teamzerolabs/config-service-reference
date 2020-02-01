import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const rootPath = process.env.NODE_ENV === "production" ? "/app" : "./src";

const options: MysqlConnectionOptions = {
  type: "mysql",
  synchronize: true,
  logging: true,
  logger: "file",
  entities: [`${rootPath}/modules/**/entities/*{.ts,.js}`],
  migrations: [`${rootPath}/migrations/*{.ts,.js}`],
  cli: {
    migrationsDir: "src/migrations"
  },
  migrationsRun: true
};
export = options;
