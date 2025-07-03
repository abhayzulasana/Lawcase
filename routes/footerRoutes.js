import express from "express";
import upload from "../middleware/upload.js";

import {
    createFooter,
    getFooter,
    getFooterById,
    updateFooter,
    deleteAllFooters,
    deleteFooter,
  } from "../controllers/footerController.js";
  const router = express.Router();
  
  router.post("/footer", createFooter);
  router.get("/footer", getFooter);
  router.get("/footer/:id", getFooterById);           // ✅ Get by ID
  router.patch("/footer/:id", updateFooter);
  router.delete("/footer/:id", deleteFooter);
  router.delete("/footer", deleteAllFooters);          // ✅ Delete all  export default router;

  export default router