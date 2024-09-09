import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('get_users')
  getUsers(data: any[]) {
    console.log('users from serviceB', data);
  }
}
