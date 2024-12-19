import type { NextFunction, Request, Response } from 'express';
import { Controller, Get, Middleware } from '../../common/decorators/RouteDecorator.js';
import { UserService } from './user.service.js';
import autoBind from 'auto-bind';

@Controller('/users')
export class UserController {
  private service: UserService;
  constructor() {
    autoBind(this);
    this.service = new UserService();
  }
  @Get('/')
  @Middleware((req: Request, res: Response, next: NextFunction) => {
    console.log('a');
    next();
  })
  getAllUsers(req: Request, res: Response) {
    const data = this.service.getAllUsers();
    res.json(data);
  }
}