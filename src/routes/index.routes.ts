import express from 'express';

import IndexController from '../controller/index.controller';

const routes = express.Router();

routes.get('/', IndexController.get);

export default routes;
