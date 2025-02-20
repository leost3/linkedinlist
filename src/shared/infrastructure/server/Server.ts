import express from 'express';
import { Router } from 'express';

export class Server {
  private readonly express: express.Express;

  constructor(router: Router) {
    this.express = express();
    this.express.use(express.json());
    this.express.use(router);
  }

  getApp() {
    return this.express;
  }

  async listen(port: number): Promise<void> {
    return new Promise((resolve) => {
      this.express.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
        resolve();
      });
    });
  }
}