import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly jwtSecret = 'test-secret'; // Use env in production

  // Simulate user validation
  async validateUser(username: string, password: string): Promise<any> {
    // Hardcoded user for demo
    if (username === 'test' && password === 'test') {
      return { userId: 1, username: 'test' };
    }
    return null;
  }

  // Login returns JWT if valid
  async login(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.validateUser(username, password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const access_token = this.sign({
      sub: user.userId,
      username: user.username,
    });
    return { access_token };
  }

  sign(payload: any): string {
    return jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' });
  }

  verify(token: string): any {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch {
      return null;
    }
  }
}
