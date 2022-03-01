import express, { Router } from "express";
import GeocodingRouter from "./Geocoding/index.js";

export default class Routes {
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.use("/geocoding", new GeocodingRouter().router);
  }
}
