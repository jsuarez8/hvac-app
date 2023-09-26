import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Create a connection to the database using the environment variables.
const db = mysql2
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
  })
  .promise();

// Try to establish a connection to the database.
connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connection established successfully to the database");
});

export default db;
