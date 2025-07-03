import express from "express";
import upload from "../middleware/upload.js";
import {
  createAboutUs,
  getAboutUs,
  getAboutUsById,
  updateAboutUs,
  deleteAboutUs,
  deleteAllAboutUs,
} from "../controllers/aboutUsController.js";

import {
  createWhyChooseUs,
  getWhyChooseUs,
  getWhyChooseUsById,
  updateWhyChooseUs,
  deleteWhyChooseUsById,
  deleteAllWhyChooseUs,
  } from "../controllers/aboutUsController.js";

  import {
    createTeamMember,
    getAllTeamMembers,
    getTeamMemberById,
    updateTeamMember,
    deleteTeamMember,
  } from "../controllers/aboutUsController.js";
  
const router = express.Router();

router.post("/aboutus",
  upload.fields([
    { name: "images", maxCount: 3 },
    { name: "mission[image]", maxCount: 1 },
    { name: "vision[image]", maxCount: 1 },
  ]),
  createAboutUs
);router.get("/aboutus", getAboutUs);
router.get("/aboutus/:id", getAboutUsById);
router.patch("/aboutus/:id", upload.array("images"), updateAboutUs);
router.delete("/aboutus/:id", deleteAboutUs);
router.delete("/aboutus", deleteAllAboutUs);


router.post("/why-choose-us", upload.array("icons"), createWhyChooseUs);
router.get("/why-choose-us", getWhyChooseUs);
router.get("/why-choose-us/:id", getWhyChooseUsById);
router.patch("/why-choose-us/:id", upload.array("icons"), updateWhyChooseUs);
router.delete("/why-choose-us/:id", deleteWhyChooseUsById);
router.delete("/why-choose-us", deleteAllWhyChooseUs);

router.post("/team", upload.single("image"), createTeamMember);
router.get("/team", getAllTeamMembers); // supports ?page=1&limit=10&search=...
router.get("/team/:id", getTeamMemberById);
router.patch("/team/:id", upload.single("image"), updateTeamMember);
router.delete("/team/:id", deleteTeamMember);



export default router;