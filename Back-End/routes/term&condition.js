import express from "express";
import {
  createTerms,
  getAllTerms,
  getTermsById,
  updateTerms,
  updateSectionByTitle,
  deletesTerms,
  deleteTerms
} from "../controllers/termsController.js";
const router = express.Router();

router.post("/", createTerms);
router.get("/", getAllTerms);
router.get("/:id", getTermsById);
router.patch("/:id", updateTerms);
router.patch("/:id/section-by-title", updateSectionByTitle);
router.delete("/", deletesTerms);
router.delete("/:id", deleteTerms);

export default router;