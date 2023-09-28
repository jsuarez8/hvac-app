import express from "express";
import { json } from "express";

const router = express.Router();

router.use(json());

router.get("/", (req, res) => {
  console.log("Login Page");
});

// Tap into anything in this page via the router
export default router;
