import { ErrorResponseDto } from './../dto/errorResponse.dto';
import { CreateUserDTO } from '../dto/createUser.dto';
import { UserService } from '../user.service';
import { UserController } from './user.controller';
import { UserResponseDto } from '../dto';
import { UserDocument } from '../../schema/user.schema';

// ------------- User controller test setup ------------- //
const createUserDTO: CreateUserDTO = {
  username: 'Test User',
  password: 'password123',
  email: 'test@example.com',
};

const userDocument = {
  _id: '12345',
  username: 'Test User',
  email: 'test@example.com',
  password: 'password123',
} as unknown as UserDocument;

const userResponseDto: UserResponseDto = {
  id: '12345',
  email: 'test@example.com',
  username: 'Test User',
};

const errorResponse = new ErrorResponseDto();

// ------------- User controller test ------------- //

describe('User controller test', () => {
  let userController: UserController;
  let userServiceMock: Partial<UserService>;

  beforeEach(() => {
    userServiceMock = {
      createUser: jest.fn(),
      getAllUsers: jest.fn(),
    };
    userController = new UserController(userServiceMock as UserService);
  });

  describe('Create user - error', () => {
    it('should create a user successfully', async () => {
      (userServiceMock.createUser as jest.Mock).mockResolvedValue(userDocument);

      const result = await userController.createUser(createUserDTO);

      expect(result).toEqual(userResponseDto);
      expect(userServiceMock.createUser).toHaveBeenCalledWith(createUserDTO);
    });

    it('should throw an error when user creation fails', async () => {
      (userServiceMock.createUser as jest.Mock).mockRejectedValue(
        new Error('User creation failed'),
      );

      const result = await userController.createUser(createUserDTO);

      expect(result).toEqual(errorResponse);
      expect(userServiceMock.createUser).toHaveBeenCalledWith(createUserDTO);
    });
  });
});
