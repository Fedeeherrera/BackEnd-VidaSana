import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PersonaController } from './persona/persona.controller';
import { PersonaService } from './persona/persona.service';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    PersonaModule,
  ],
  controllers: [AppController, PersonaController],
  providers: [AppService, PersonaService],
})
export class AppModule {}
