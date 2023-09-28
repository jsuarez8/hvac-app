import express from "express";
import { json } from "express";
import { registerUser } from "../controllers/register.js";

const router = express.Router();

router.use(json());

router.get("/", (req, res) => {
  console.log("Register Page");
  res.json("this is a register page");
});

router.post("/", (req, res) => {
  registerUser(req, res);
});

// Tap into anything in this page via the router
export default router;
