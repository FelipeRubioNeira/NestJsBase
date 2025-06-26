import { UserDocument } from 'src/schema/user.schema';
import { UserResponseDto } from 'src/user/dto/userResponseDto.dto';

// Single transformation function to map a UserDocument to UserResponseDto
const userMapper = (user: UserDocument): UserResponseDto => {
  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
  };
};

// Function to map an array of UserDocuments to an array of UserResponseDto
const usersMapper = (users: UserDocument[]): UserResponseDto[] => {
  const formattedUsers = users.map((user) => userMapper(user));
  return formattedUsers;
};

export { usersMapper, userMapper };
