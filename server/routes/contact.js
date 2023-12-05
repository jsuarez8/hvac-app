import express from "express";
import { json } from "express";
import { addContact, getContacts } from "../controllers/contact.js";

const router = express.Router();

router.use(json());

// Get all contacts
router.get("/", getContacts);

// Add a new contact
router.post("/", addContact);

export default router;
