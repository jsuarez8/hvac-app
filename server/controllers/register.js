import db from "../hvacdb.js";
import bcrypt from "bcrypt";

export const registerUser = (req, res) => {
  console.log("registerUser function invoked");

  // CHECK EXISTING USER

  const checkUserQuery =
    " SELECT * FROM user WHERE email = ? OR firstName = ? OR lastName = ?";

  const checkUserRes = db.query(checkUserQuery, [
    req.body.email,
    req.body.name,
    req.body.name,
  ]);

  if (!checkUserRes) {
    console.error(err);
    res.status(500).json("Server error.");
  } else if (checkUserRes.length) {
    res.status(409).json("User already exists!");
  }

  // Hash the password and create a user
  // The hashing is done using an asynchronous function.
  // The number 10 here means bcrypt will automatically generate
  // a salt and perform 10 rounds of processing. Once the hashing is done,
  // the callback function will be executed.

  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    //10, number of rounds to use when generating a salt. Higher means more secure, but slower.
    if (err) {
      console.error(err);
      return res.status(500).json("Error hashing password.");
    }

    const [firstName, lastName] = req.body.name.split(" ");

    const insertUserQuery =
      "INSERT INTO user (email, password, firstName, lastName) VALUES (?);";
    const values = [req.body.email, req.body.password, firstName, lastName];

    const result = db.query(insertUserQuery, [values]);

    if (!result) {
      console.error(err);
      res.status(500).json("Error registering user.");
    } else {
      res.status(200).send("User Registered");
    }
  });
};
