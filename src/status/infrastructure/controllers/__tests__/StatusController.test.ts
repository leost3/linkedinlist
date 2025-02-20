import request from 'supertest';
import { Server } from '@/shared/infrastructure/server/Server';
import { Router } from '@/shared/infrastructure/server/Router';
import { environment } from '@/shared/infrastructure/config/environment';

describe('StatusController', () => {
  const server = new Server(Router.init());
  const app = server.getApp();

  test('GET / should return status and environment', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Welcome to Express + TypeScript Server',
      environment: environment.NODE_ENV
    });
  });
});