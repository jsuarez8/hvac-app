import db from "../hvacdb.js";
import bcrypt from "bcrypt";

export const registerUser = (req, res) => {
  console.log("registerUser function invoked");

  // CHECK EXISTING USER

  const checkUserQuery = " SELECT * FROM user WHERE email = ? OR firstName = ?";

  const checkUserRes = db.query(checkUserQuery, [
    req.body.email,
    req.body.name,
  ]);

  if (!checkUserRes) {
    console.error(err);
    res.status(500).json("Server error.");
  } else if (checkUserRes.length) {
    res.status(409).json("User already exists!");
  }

  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    //10, number of rounds to use when generating a salt. Higher means more secure, but slower.
    if (err) {
      console.error(err);
      return res.status(500).json("Error hashing password.");
    }

    // INSERT NEW USER
    const insertUserQuery =
      "INSERT INTO user (email, password, firstName ) VALUES (?);";
    const values = [req.body.email, hashedPassword, req.body.name];

    const result = db.query(insertUserQuery, [values]);

    if (!result) {
      console.error(err);
      res.status(500).json("Error registering user.");
    } else {
      res.status(200).send("User Registered");
    }
  });
};
