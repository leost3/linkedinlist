import request from 'supertest';
import app from '@/app';

describe('Express App', () => {
  test('GET / should return welcome message and environment', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Welcome to Express + TypeScript Server',
      environment: process.env.NODE_ENV || 'development'
    });
  });
});