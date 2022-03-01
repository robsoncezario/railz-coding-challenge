import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import Routes from "../../routes/index.js";

import swaggerDocs from "../../swagger.json";

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocs)
    );
    this.express.use("/api/v1", new Routes().router);
  }
}

const app = new AppController().express;

export default app;
