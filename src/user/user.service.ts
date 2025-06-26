import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/createUser.dto';
import { User, UserDocument } from 'src/schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<UserDocument> {
    return this.userModel.create(createUserDTO);
  }

  async getAllUsers(limit: number = 10): Promise<UserDocument[]> {
    return this.userModel.find().limit(limit).exec();
  }
}
