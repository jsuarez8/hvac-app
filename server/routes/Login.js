import express from "express";
import { json } from "express";
import { loginUser } from "../controllers/login";

const router = express.Router();

router.use(json());

router.get("/", (req, res) => {
  console.log("Login Page");
});

router.post("/", loginUser);

// Tap into anything in this page via the router
export default router;
