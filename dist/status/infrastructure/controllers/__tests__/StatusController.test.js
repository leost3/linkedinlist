"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const Server_1 = require("@/shared/infrastructure/server/Server");
const Router_1 = require("@/shared/infrastructure/server/Router");
const environment_1 = require("@/shared/infrastructure/config/environment");
describe('StatusController', () => {
    const server = new Server_1.Server(Router_1.Router.init());
    const app = server.getApp();
    test('GET / should return status and environment', async () => {
        const response = await (0, supertest_1.default)(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: 'Welcome to Express + TypeScript Server',
            environment: environment_1.environment.NODE_ENV
        });
    });
});
