import db from "../hvacdb.js";
import bcrypt from "bcrypt";

export const registerUser = (req, res) => {
  // CHECK EXISTING USER

  const checkUserQuery =
    " SELECT * FROM user WHERE email = ? OR firstName = ? OR lastName = ?";

  db.query(
    checkUserQuery,
    [req.body.email, req.body.name, req.body.name],
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Server error.");
      }
      if (data.length) {
        return res.status(409).json("User already exists!");
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

        const insertUserQuery =
          "INSERT INTO user (`email`, `password`, `firstName`, `lastName`) VALUES (?, ?, ?, ?)";
        const values = [req.body.email, hashedPassword, firstName, lastName];

        db.query(insertUserQuery, [values], (err, data) => {
          if (err) {
            console.error(err);
            return res.status(500).json("Error registering user.");
          }

          res.status(200).send("User Registered");
        });
      });
    }
  );
};
