import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { passwordRegExp } from 'src/utils/const';
import { failPasswordValidationMessage } from 'src/utils/errorMessages';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(passwordRegExp, {
    message: failPasswordValidationMessage,
  })
  password: string;
}
