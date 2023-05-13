import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './auth.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const key = this.extractKeyFromHeader(request);
    if (!key) {
      throw new UnauthorizedException();
    }

    if (key !== process.env.ROOT_KEY) {
      throw new UnauthorizedException();
    }
    console.log('HERE');
    return true;
  }

  private extractKeyFromHeader(request: Request): string | undefined {
    const key = request.headers['key'] ? request.headers['key'] : '';
    return key;
  }
}
