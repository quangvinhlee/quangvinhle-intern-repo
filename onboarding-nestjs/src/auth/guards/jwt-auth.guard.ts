import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const authHeader = req.headers['authorization'];
    if (!authHeader) throw new UnauthorizedException('No auth header');
    const token = authHeader.replace('Bearer ', '');
    const payload = this.authService.verify(token);
    if (!payload) throw new UnauthorizedException('Invalid token');
    req['user'] = payload;
    return true;
  }
}
