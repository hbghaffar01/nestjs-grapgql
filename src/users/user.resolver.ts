import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user';
import { UserService } from './user.service';
import { getUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { getUsersArgs } from './dto/args/get-users.args';
import { UpdateUserInput } from './dto/input/update-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: getUserArgs): User {
    return this.userService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(@Args() getUsersArgs: getUsersArgs): User[] {
    return this.userService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.userService.createUser(createUserData);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.userService.updateUser(updateUserData);
  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
    return this.userService.deleteUser(deleteUserData);
  }
}
