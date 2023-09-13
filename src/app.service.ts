import { Injectable } from '@nestjs/common';

export interface Persona {
  nombreApellido: string;
  email: string;
  donacion: number;
  mensaje: string;
  id: number;
}

export const personas: Persona[] = [
  {
    nombreApellido: 'Juan Pérez',
    email: 'juan@example.com',
    donacion: 50,
    mensaje: '¡Gracias por la oportunidad de ayudar!',
    id: 1,
  },
  {
    nombreApellido: 'María Rodríguez',
    email: 'maria@example.com',
    donacion: 100,
    mensaje: 'Espero que esta donación haga una diferencia.',
    id: 2,
  },
  {
    nombreApellido: 'Carlos Gómez',
    email: 'carlos@example.com',
    donacion: 25,
    mensaje: 'Un pequeño gesto puede tener un gran impacto.',
    id: 3,
  },
  {
    nombreApellido: 'Ana Martínez',
    email: 'ana@example.com',
    donacion: 75,
    mensaje: 'Espero que esta contribución ayude a quienes más lo necesitan.',
    id: 4,
  },
  {
    nombreApellido: 'Luis Herrera',
    email: 'luis@example.com',
    donacion: 200,
    mensaje: '¡Sigamos haciendo del mundo un lugar mejor!',
    id: 5,
  },
  {
    nombreApellido: 'Laura González',
    email: 'laura@example.com',
    donacion: 30,
    mensaje: 'Un granito de arena para cambiar vidas.',
    id: 6,
  },
  {
    nombreApellido: 'Andrés López',
    email: 'andres@example.com',
    donacion: 150,
    mensaje: 'Gracias por brindar esta oportunidad de ayudar.',
    id: 7,
  },
  {
    nombreApellido: 'Mariano Castro',
    email: 'mariano@example.com',
    donacion: 250,
    mensaje: 'Cada aporte cuenta, ¡juntos somos más fuertes!',
    id: 8,
  },
  {
    nombreApellido: 'Romina Rodriguez',
    email: 'rominax@example.com',
    donacion: 50,
    mensaje: 'Salvemos el mundo juntos',
    id: 9,
  },
  {
    nombreApellido: 'Lorenzo Gomez',
    email: 'lorengomez@example.com',
    donacion: 500,
    mensaje: 'Podemos ganarle al calentamiento global, estamos a tiempo',
    id: 10,
  },
];

@Injectable()
export class AppService {
  getPersonas(): any {
    return personas;
  }
}