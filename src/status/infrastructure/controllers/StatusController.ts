import { Request, Response } from 'express';
import { StatusService } from '@/status/application/StatusService';

export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  async getStatus(req: Request, res: Response): Promise<void> {
    const response = this.statusService.getStatus();
    res.json(response);
  }
}