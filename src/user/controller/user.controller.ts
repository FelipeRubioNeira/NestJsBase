import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../user.service';
import { UserResponseDto, CreateUserDTO, ErrorResponseDto } from '../dto';
import { userMapper, usersMapper } from 'src/mappers/user.mapper';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(
    @Body() createUserDTO: CreateUserDTO,
  ): Promise<UserResponseDto | ErrorResponseDto> {
    try {
      const createdUser = await this.userService.createUser(createUserDTO);
      const UserResponseDto = userMapper(createdUser);
      return UserResponseDto;
    } catch {
      return new ErrorResponseDto();
    }
  }

  @Get('get-all')
  async getAllUsers(): Promise<UserResponseDto[]> {
    const allUsers = await this.userService.getAllUsers();
    const usersResponse = usersMapper(allUsers);
    return usersResponse;
  }
}
