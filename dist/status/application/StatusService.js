"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusService = void 0;
const environment_1 = require("@/shared/infrastructure/config/environment");
class StatusService {
    getStatus() {
        return {
            message: 'Welcome to Express + TypeScript Server',
            environment: environment_1.environment.NODE_ENV
        };
    }
}
exports.StatusService = StatusService;
