import express from "express";
import upload from "../middleware/upload.js";
import {
    createNavbar,
    getNavbar,
    getAllNavbar,
    getNavbarById,
    updateNavbar,
    deleteNavbar,
    deleteAllNavbar,
  } from "../controllers/navbarController.js";

const router = express.Router();

router.post("/navbar", upload.single("logoImage"), createNavbar);
router.get("/navbar/", getAllNavbar);
router.get("/navbar/:id", getNavbarById);
router.patch("/navbar/:id", upload.single("logoImage"), updateNavbar);
router.delete("/navbar/:id", deleteNavbar);
router.delete("/navbar", deleteAllNavbar);

export default router;
