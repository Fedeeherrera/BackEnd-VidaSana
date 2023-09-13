import { Injectable } from '@nestjs/common';
import { Persona } from './persona.interface';

const BASE_URL = `http://localhost:3030/personas/`;

@Injectable()
export class PersonaService {
  async getPersonas(): Promise<Persona[]> {
    const response = await fetch(BASE_URL);
    const parsed = await response.json();
    return parsed;
  }
  async getPersonaById(id: number): Promise<Persona[]> {
    const response = await fetch(BASE_URL + id);
    const parsed = await response.json();
    return parsed;
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
    return parsed;
  }

  private async setId(): Promise<number> {
    const personas = await this.getPersonas();
    const id = personas.pop().id + 1;
    return id;
  }
  async deleteTrackById(id: number): Promise<any> {
    const res = await fetch(BASE_URL + id, {
      method: 'DELETE',
    });
    const parsed = await res.json;
    return parsed;
  }
  async updateTrackById(id: number, body: Persona): Promise<void> {
    const isPerson = await this.getPersonaById(id);
    if (!Object.keys(isPerson).length) return;
    const updatePersona = { ...body, id };
    console.log('Actualizado, ', updatePersona);
    const res = await fetch(BASE_URL + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatePersona),
    });
    const parsed = await res.json();
    return parsed;
  }
}
