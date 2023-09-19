import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaDto } from './persona.dto';

@Controller()
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}
  @Get('/personas')
  @HttpCode(202)
  async getPersonas(): Promise<PersonaDto[]> {
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
  createPersona(@Body() PersonaDto: PersonaDto): Promise<any> {
    return this.personaService.createPersona(PersonaDto);
  }
  @Delete('/personas/:id')
  @HttpCode(200)
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
    @Body() PersonaDto: PersonaDto,
  ): Promise<void> {
    return this.personaService.updatePersonById(id, PersonaDto);
  }
}
