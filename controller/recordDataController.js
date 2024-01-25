const StatusCodes = require("http-status-codes");
const bodyParser = require("body-parser");
const fs = require("fs").promises; // Use fs.promises
const path = require("path");

const createEntry = async (req, res) => {
  const dataFilePath = path.join(__dirname, "../data/data.csv");
  try {
    const { registerationNo } = req.body;

    try {
      // Check if the file exists
      await fs.access(dataFilePath);

      // Append the registration number to the existing file
      await fs.appendFile(dataFilePath, `${registerationNo}\n`);

      res.json({ message: "Registration number added to data.csv" });
    } catch (error) {
      // Create a new data.csv file and add the registration number
      await fs.writeFile(dataFilePath, `${registerationNo}\n`);

      res.json({
        message: "Registration number added to new data.csv",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createEntry };
