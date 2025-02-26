"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    constructor(router) {
        this.express = (0, express_1.default)();
        this.express.use(express_1.default.json());
        this.express.use(router);
    }
    getApp() {
        return this.express;
    }
    async listen(port) {
        return new Promise((resolve) => {
            this.express.listen(port, () => {
                console.log(`Server is running at http://localhost:${port}`);
                resolve();
            });
        });
    }
}
exports.Server = Server;
