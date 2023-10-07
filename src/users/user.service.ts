import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    // salt 랜덤 텍스트 생성
    const salt = await bcrypt.genSalt();
    // bcrypt를 사용 하여 입력한 비밀번호와 salt를 합쳐 암호화
    const hashPassword = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    try {
      await this.userRepository.save(user);
      return {
        success: true,
        user,
      };
    } catch (e) {}
  }
}
