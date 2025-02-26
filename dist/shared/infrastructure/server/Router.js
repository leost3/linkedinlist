"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = require("express");
const routes_1 = require("@/status/infrastructure/routes");
class Router {
    static init() {
        const router = (0, express_1.Router)();
        // Mount domain routes
        router.use('/', routes_1.statusRoutes);
        return router;
    }
}
exports.Router = Router;
