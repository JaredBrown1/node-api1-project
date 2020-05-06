const express = require("express");
const shortid = require("shortid");

const server = express();

server.use(express.json());

let users = [];

server.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

server.post("/api/users", (req, res) => {
  const userInfo = req.body;

  userInfo.id = shortid.generate();
  users.push(userInfo);

  res.status(201).json(userInfo);
});

//-----------------------------------------------------
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
