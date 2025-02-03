import { Injectable } from '@nestjs/common';
import { User } from './user';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {

  private users: User[] = [
    {
      id: randomUUID(),
      name: 'Bob',
      email: 'bob@example.com',
      password: '$2a$20$gzWnGl3.sl5pgpxzkRHSmupmmu.y7BcCm5GibySKXM5p8Ki.ddMji'
    },
    {
      id: randomUUID(),
      name: 'Alice',
      email: 'alice@example.com',
      password: '$2a$12$kQfNE.yrkUn3WpjsWz4SKuSXp3oqVVSGW1DTKdf/fDh3GhOczaNUK'
    }
  ]

  findByEmail(email: string): User {
    return this.users.find(user => email === user.email)!;
  }

}
