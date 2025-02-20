import { Router as ExpressRouter } from 'express';
import { statusRoutes } from '@/status/infrastructure/routes';

export class Router {
  static init(): ExpressRouter {
    const router = ExpressRouter();
    
    // Mount domain routes
    router.use('/', statusRoutes);
    
    return router;
  }
}