export type AppConfig = {
  port: number;
};

export type MYSQLConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};

export type ConfigProperties = {
  app: AppConfig;
  mysql: MYSQLConfig;
};
