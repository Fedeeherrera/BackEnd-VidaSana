import { Injectable, NotFoundException } from '@nestjs/common';
import { Persona } from './persona.dto';

const BASE_URL = 'http://localhost:3030/personas/';

@Injectable()
export class PersonaService {
  async getPersonas(): Promise<Persona[]> {
    try {
      const response = await fetch(BASE_URL);
      const parsed = await response.json();
      return parsed;
    } catch (error) {
      throw new NotFoundException(`No se puede hacer la consulta`);
    }
  }

  async getPersonaById(id: number): Promise<Persona[]> {
    const response = await fetch(BASE_URL + id);
    const parsed = await response.json();
    if (Object.keys(parsed).length) return parsed;
    throw new NotFoundException(`Persona con ID: ${id} no  encontrado`);
  }
  async createPersona(persona: Persona) {
    const id = await this.setId();
    const newPersona = { ...persona, id };
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPersona),
    });
    const parsed = await response.json();

    if (response.status === 201) {
      return { message: 'Persona creada correctamente' };
    }
    return parsed;
  }

  private async setId(): Promise<number> {
    const personas = await this.getPersonas();
    const id = personas.pop().id + 1;
    return id;
  }
  async deletePersonaByID(id: number): Promise<any> {
    const response = await fetch(BASE_URL + id, {
      method: 'DELETE',
    });
    if (response.status === 404) {
      throw new NotFoundException(`Persona con ID ${id} no encontrado`);
    }
    if (response.status === 200) {
      return { message: 'Se ha eliminado correctamente' };
    }
    const parsed = await response.json();

    return parsed;
  }
  async updatePersonById(id: number, body: Persona): Promise<void> {
    const isPerson = await this.getPersonaById(id);
    if (!Object.keys(isPerson).length) return;
    const updatePersona = { ...body, id };
    console.log('Actualizado, ', updatePersona);
    const response = await fetch(BASE_URL + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatePersona),
    });
    const parsed = await response.json();
    return parsed;
  }
}
