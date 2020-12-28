import { Injectable } from '@nestjs/common';
import { Message } from '@mreza-mladih-platform/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
