import { StatusService } from '@/status/application/StatusService';
import { Request, Response } from 'express';

export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  async getStatus(_: Request, res: Response): Promise<void> {
    const response = this.statusService.getStatus();
    res.json(response);
  }
}