import db from "../hvacdb.js";
import jwt from "jsonwebtoken";

export const loginUser = (req, res) => {
  const q = "SELECT * FROM user WHERE email = ? or username = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Server error.");
    }
    if (data.length === 0) {
      return res.status(409).json("User not found!");
    }

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");
  });
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
