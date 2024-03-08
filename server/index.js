const express = require("express");
const cors = require("cors");
const {
  getCompliment,
  getFortune,
  createLuckyNumber,
} = require("./controller");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/lucky-number/:luckyNumber", createLuckyNumber);

app.listen(4000, () => console.log("Server running on 4000"));
