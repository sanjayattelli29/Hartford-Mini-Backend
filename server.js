const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const DB = "./db.json";

app.get("/data", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB, "utf-8"));
  res.json(data);
});

app.post("/data", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB, "utf-8"));
  data.push(req.body);
  fs.writeFileSync(DB, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("running"));
