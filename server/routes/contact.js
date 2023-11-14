import express from "express";
import { json } from "express";
import { addContact, getContacts } from "../controllers/contact.js";

const router = express.Router();

router.use(json());

// Get all contacts
router.get("/contact", getContacts);

// Add a new contact
router.post("/contact", addContact);

export default router;
