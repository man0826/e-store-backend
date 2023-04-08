import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth-input';
import { AuthResponse } from './dto/auth-entity';

@Resolver(() => AuthResponse)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse, { name: 'authenticate' })
  createAuth(@Args('authInput') authInput: AuthInput) {
    return this.authService.validateUser(authInput);
  }
}
