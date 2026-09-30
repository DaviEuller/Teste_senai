import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './produtos/produtos.module.js'

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ProdutosModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'senai2026',
      database: 'almoxarifado',
      autoLoadEntities: true,
      synchronize: false,
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
