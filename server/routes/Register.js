import express from "express";
import { json } from "express";
import { RegisterUser } from "../controller/Register.js";

const router = express.Router();

router.use(json());

router.get("/", (req, res) => {
  console.log("Register Page");
});

router.post("/", (req, res) => {
  RegisterUser(req, res);
});

// Tap into anything in this page via the router
export default router;
