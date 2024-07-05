import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrestamoModule } from './prestamo/prestamo.module';

@Module({
  imports: [PrestamoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
