import db from "../hvacdb.js";

export const getContacts = (req, res) => {
  const query = "SELECT * FROM contacts";

  db.query(query, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Server error.");
    }
    res.status(200).json(data);
  });
};

export const addContact = (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const query =
    "INSERT INTO contacts (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)";

  db.query(query, [firstName, lastName, email, phone, message], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Server error.");
    }
    res.status(200).json("Contact added successfully!");
  });
};
