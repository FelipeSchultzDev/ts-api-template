import express from 'express';
import cors from 'cors';

class App {
    public express: express.Application;

    constructor() {
      this.express = express();

      this.middlewares();
      this.routes();
    }

    private middlewares(): void {
      this.express.use(express.json());
      this.express.use(cors());
    }

    private routes(): void {
      this.express.get('/', (req, res) => res.status(200).json({ success: true }));
    }
}

export default new App().express;
