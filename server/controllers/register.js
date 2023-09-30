import { db } from "../hvacdb.js";
export const registerUser = (request, response) => {
  // CHECK EXISTING USER

  const checkUserQuery = " SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(checkUserQuery, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error(err);
      return response.status(500).json("Server error.");
    }
    if (data.length) {
      return response.status(409).json("User already exists!");
    }

    // Hash the password and create a user
    // The hashing is done using an asynchronous function.
    // The number 10 here means bcrypt will automatically generate
    // a salt and perform 10 rounds of processing. Once the hashing is done,
    // the callback function will be executed.
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      // 10,Number of rounds to use when generating a salt. Higher means more secure, but slower.
      if (err) {
        console.error(err);
        return response.status(500).json("Error hashing password.");
      }
    });

    const insertUserQuery =
      "INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [req.body.name, req.body.email, req.body.password];

    db.query(insertUserQuery, [values], (err, data) => {
      if (err) {
        console.error(err);
        return response.status(500).json("Error registering user.");
      }

      response.status(200).send("User Registered");
    });
  });

  // try {
  //   console.log(
  //     "name: " +
  //       request.body.name +
  //       " email: " +
  //       request.body.email +
  //       " password: " +
  //       request.body.password
  //   );
  //   response.status(200).send("User Registered");
  // } catch (err) {
  //   console.log(
  //     response
  //       .status(500)
  //       .send(err.message, "Error registering user when attempting to register")
  //   );
  // }
};
