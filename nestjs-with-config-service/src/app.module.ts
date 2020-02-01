import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { CommonModule, ConfigService } from "./modules/common/common.module";
import { routes } from "./routes";
import { RouterModule } from "nest-router";
import { V1Module } from "./modules/v1/v1.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as ormConfig from "./config/ormconfig";

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    CommonModule,
    V1Module,
    TypeOrmModule.forRootAsync({
      imports: [CommonModule],
      useFactory: async (configService: ConfigService) =>
        ({
          name: "default",
          ...ormConfig,
          ...configService.mysql
        } as MysqlConnectionOptions),
      inject: [ConfigService]
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
