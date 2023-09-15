import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpCode,
  Res,
  HttpStatus,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Persona } from './persona.interface';

@Controller()
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}
  @Get('/personas')
  @HttpCode(202)
  async getPersonas(): Promise<Persona[]> {
    return this.personaService.getPersonas();
  }

  @Get('/personas/:id')
  async getPersonaById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<any> {
    return this.personaService.getPersonaById(id);
  }
  @Post('/personas/')
  @HttpCode(201)
  createPersona(@Body() body): Promise<any> {
    return this.personaService.createPersona(body);
  }
  @Delete('/personas/:id')
  @HttpCode(204)
  deletePersonaByID(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.personaService.deletePersonaByID(id);
  }
  @Put('/personas/:id')
  @HttpCode(204)
  updatePersonById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Body() body,
  ): Promise<void> {
    return this.personaService.updatePersonById(id, body);
  }
}
