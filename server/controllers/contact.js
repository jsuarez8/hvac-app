import db from "../hvacdb.js";

export const getContacts = async (req, res) => {
  const query = "SELECT * FROM contacts";

  try {
    const [data] = await db.query(query);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error.");
  }
};

export const addContact = async (req, res) => {
  console.log("Attempting to add contact");

  const { firstName, lastName, email, phone, message } = req.body;

  console.log(req.body);

  if (!firstName || !lastName || !email) {
    // Return an error response if required fields are missing
    return res.status(400).json("Missing required fields");
  }

  const query =
    "INSERT INTO contacts (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)";

  try {
    await db.query(query, [firstName, lastName, email, phone, message]);
    res.status(200).json("Contact added successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error.");
  }
};
