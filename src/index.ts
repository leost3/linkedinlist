import { environment } from '@/shared/infrastructure/config/environment';
import { Router } from '@/shared/infrastructure/server/Router';
import { Server } from '@/shared/infrastructure/server/Server';

async function bootstrap() {
  const router = Router.init();
  const server = new Server(router);

  await server.listen(Number(environment.PORT));
}

bootstrap();