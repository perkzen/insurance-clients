import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPing(): string {
    return 'App is up and running! 🚀';
  }
}
