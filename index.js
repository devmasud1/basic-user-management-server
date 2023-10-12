const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
//middleware

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("user management server is listening");
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`user management is running on port ${port}`);
});
