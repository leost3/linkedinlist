import { StatusResponse } from '@/status/domain/StatusResponse';
import { environment } from '@/shared/infrastructure/config/environment';

export class StatusService {
  getStatus(): StatusResponse {
    return {
      message: 'Welcome to Express + TypeScript Server',
      environment: environment.NODE_ENV
    };
  }
}