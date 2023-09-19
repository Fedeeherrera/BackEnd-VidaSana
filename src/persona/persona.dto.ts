import { IsString, IsInt, IsOptional } from 'class-validator';

export class PersonaDto {
  @IsString()
  nombreApellido: string;

  @IsString()
  email: string;

  @IsInt()
  donacion: number;

  @IsString()
  mensaje: string;

  @IsOptional()
  @IsInt()
  id?: number;
}
