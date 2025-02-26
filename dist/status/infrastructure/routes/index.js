"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusRoutes = void 0;
const express_1 = require("express");
const StatusController_1 = require("@/status/infrastructure/controllers/StatusController");
const StatusService_1 = require("@/status/application/StatusService");
const router = (0, express_1.Router)();
const statusService = new StatusService_1.StatusService();
const statusController = new StatusController_1.StatusController(statusService);
router.get('/', (req, res) => statusController.getStatus(req, res));
exports.statusRoutes = router;
