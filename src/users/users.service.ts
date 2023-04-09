import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const { email, password } = createUserInput;
    const existUser = await this.findByEmail(email);
    if (existUser) {
      throw new ConflictException(
        '入力されたメールアドレスは既に登録されています。',
      );
    }
    const hash = await bcrypt.hashSync(password, 10);

    if (!hash) {
      throw new InternalServerErrorException('パスワードが不正です。');
    }

    return await this.prisma.user.create({
      data: {
        ...createUserInput,
        password: hash,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findOne(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateUserInput): Promise<User> {
    try {
      return await this.prisma.user.update({
        where: {
          id,
        },
        data,
      });
    } catch {
      throw new ConflictException(
        '入力されたメールアドレスは既に登録されています。',
      );
    }
  }
}
