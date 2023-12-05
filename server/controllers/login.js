import db from "../hvacdb.js"; // Assuming this db is from mysql2/promise
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  try {
    console.log("Attempting login;");

    const checkUserQuery = "SELECT * FROM user WHERE email = ?";
    const [rows] = await db.query(checkUserQuery, [req.body.email]);

    if (rows.length === 0) {
      return res.status(409).json("User not found!");
    }

    const user = rows[0];
    const checkPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!checkPassword) {
      return res.status(400).json("Wrong password or username!");
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json("Server error.");
  }
};

export const logoutUser = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out.");
};
