"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("@/shared/infrastructure/server/Router");
const Server_1 = require("@/shared/infrastructure/server/Server");
async function bootstrap() {
    const router = Router_1.Router.init();
    const server = new Server_1.Server(router);
    await server.listen(8080);
}
bootstrap();
