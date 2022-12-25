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

exports.saveUser = (req, res) => {
  try {
    const data = fs.readFileSync(process.cwd() + "/data/users.json");
    const users = JSON.parse(data);
    const tmpUser = {
      id: users.length + 1,
      name: req.body.name,
      gender: req.body.gender,
      address: req.body.address,
      contact: req.body.contact,
      photoUrl: req.body.photoUrl,
    };
    if (!tmpUser.name) {
      return res.status(400).json({ error: "Name required." });
    }
    if (!tmpUser.gender) {
      return res.status(400).json({ error: "Gender required." });
    }
    if (!tmpUser.address) {
      return res.status(400).json({ error: "Address required." });
    }
    if (!tmpUser.contact) {
      return res.status(400).json({ error: "Contact required." });
    }
    if (!tmpUser.photoUrl) {
      return res.status(400).json({ error: "photoUrl required." });
    }
    users.push(tmpUser);
    fs.writeFile(
      process.cwd() + "/data/users.json",
      JSON.stringify(users, null, 2),
      () => {
        res.status(200).json({ data: tmpUser });
      }
    );
  } catch {
    res.status(500).json({ error: "Somthing went wrong!" });
  }
};
