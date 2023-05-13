import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const Private = (): MethodDecorator & ClassDecorator => {
  return applyDecorators(UseGuards(AuthGuard));
};
