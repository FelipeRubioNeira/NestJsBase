import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/createUser.dto';
import { User } from 'src/schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = new this.userModel(createUserDTO);
    return newUser.save();
  }

  async getAllUsers(limit: number = 10): Promise<User[]> {
    return this.userModel.find().limit(limit).exec();
  }
}
