const express = require("express");
const cors = require("cors");

const app = express();

const recordDataRouter = require("./routes/recordDataRoute");

app.use(express.json());
app.use(cors());

//routes

app.use("/api/v1/student", recordDataRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`LenderApp Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
