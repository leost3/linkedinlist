import { Router } from 'express';
import { StatusController } from '@/status/infrastructure/controllers/StatusController';
import { StatusService } from '@/status/application/StatusService';

const router = Router();
const statusService = new StatusService();
const statusController = new StatusController(statusService);

router.get('/', (req, res) => statusController.getStatus(req, res));

export const statusRoutes = router;