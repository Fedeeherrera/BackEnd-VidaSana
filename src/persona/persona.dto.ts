import { IsString, IsInt } from 'class-validator';

export class PersonaDto {
  @IsString()
  nombreApellido: string;
  @IsString()
  email: string;
  @IsInt()
  donacion: number;
  @IsString()
  mensaje: string;
  @IsInt()
  id: number;
}
