import express from "express";
import upload from "../middleware/upload.js";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  deleteAllContacts,
} from "../controllers/contactController.js";

import {
  createContactCard,
  getAllContactCards,
  deleteContactCard,
  deleteAllContactCards,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/message", createContact);
router.get("/message", getAllContacts);
router.get("/message/:id", getContactById);
router.patch("/message/:id", updateContact);
router.delete("/message", deleteAllContacts);
router.delete("/message/:id", deleteContact);

router.post(
  "/info",
  upload.fields([
    { name: "icon", maxCount: 1 },
    { name: "bgImage", maxCount: 1 },
  ]),
  createContactCard
);
router.get("/info", getAllContactCards);
router.delete("/info", deleteAllContactCards);
router.delete("/info/:id", deleteContactCard);

export default router;
