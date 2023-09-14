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
} from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Persona } from './persona.interface';

@Controller()
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}
  @Get('/personas')
  getPersonas(): Promise<Persona[]> {
    return this.personaService.getPersonas();
  }
  @Get('/personas/:id')
  async getPersonaById(@Res() response, @Param('id') id: number): Promise<any> {
    const responseFromService = await this.personaService.getPersonaById(id);
    if (Object.keys(responseFromService).length) {
      return response.status(HttpStatus.OK).json(responseFromService);
    } else {
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ error: 'Persona No Existe' });
    }
  }
  @Post('/personas/')
  @HttpCode(201)
  createPersona(@Body() body): Promise<any> {
    return this.personaService.createPersona(body);
  }
  @Delete(':id')
  deletePersonaByID(@Param('id') id: number) {
    return this.personaService.deletePersonaByID(id);
  }
  @Put(':id')
  @HttpCode(204)
  updatePersonById(@Param('id') id: number, @Body() body): Promise<void> {
    return this.personaService.updatePersonById(id, body);
  }
}
