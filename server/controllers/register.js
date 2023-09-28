export const registerUser = (request, response) => {
  try {
    console.log(
      "name: " +
        request.body.name +
        " email: " +
        request.body.email +
        " password: " +
        request.body.password
    );
    response.status(200).send("User Registered");
  } catch (err) {
    console.log(
      response
        .status(500)
        .send(err.message, "Error registering user when attempting to register")
    );
  }
};
