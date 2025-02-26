"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusController = void 0;
class StatusController {
    constructor(statusService) {
        this.statusService = statusService;
    }
    async getStatus(_, res) {
        const response = this.statusService.getStatus();
        res.json(response);
    }
}
exports.StatusController = StatusController;
