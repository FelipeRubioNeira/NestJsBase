import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(6, {
    message: 'El largo minimo del nombre de usuario es 6 caracteres',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, {
    message: 'El largo minimo de la contraseña es 6 caracteres',
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'El email debe ser valido' })
  email: string;
}
