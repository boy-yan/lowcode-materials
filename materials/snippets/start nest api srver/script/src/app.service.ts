import { Injectable } from '@nestjs/common';
import { context } from './context';

@Injectable()
export class AppService {
  getHello(): string {
    return context.lowcodeContext?.materialPath || 'Hello World!';
  }
}
