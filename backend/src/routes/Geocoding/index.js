import { Router } from "express";
import GeocodingController from "../../controllers/GeocodingController/index.js";

import searchSchema from "../../validation/Geocoding/search.js";
import validateMiddleware from "../../middlewares/joi/validateBody.js";

export default class GeocodingRouter {
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post(
      "/search",
      validateMiddleware(searchSchema),
      GeocodingController.search
    );
  }
}
