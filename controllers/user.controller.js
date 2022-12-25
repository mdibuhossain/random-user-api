const fs = require("fs");

exports.getAllUsers = (req, res) => {
  const data = fs.readFileSync(process.cwd() + "/data/users.json");
  const result = JSON.parse(data);
  res.status(200).json({ data: result });
};

exports.getRandomUser = (req, res) => {
  const data = fs.readFileSync(process.cwd() + "/data/users.json");
  const users = JSON.parse(data);
  const rand = Math.floor(Math.random() * users.length);
  res.status(200).json({ data: users[rand] });
};
