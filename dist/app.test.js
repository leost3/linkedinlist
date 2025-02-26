"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("@/app"));
describe('Express App', () => {
    test('GET / should return welcome message and environment', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: 'Welcome to Express + TypeScript Server',
            environment: process.env.NODE_ENV || 'development'
        });
    });
});
