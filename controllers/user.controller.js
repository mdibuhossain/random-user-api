const fs = require("fs");
const url = require("url");

exports.getAllUsers = (req, res) => {
  try {
    const data = fs.readFileSync(process.cwd() + "/data/users.json");
    const result = JSON.parse(data);
    const queryObject = url.parse(req.url, true).query;
    const size = Number(queryObject.limit);
    if (size && size > 0) {
      return res.status(200).json({ data: result.slice(0, size) });
    }
    res.status(200).json({ data: result });
  } catch {
    res.status(500).json({ error: "Somthing went wrong!" });
  }
};

exports.getRandomUser = (req, res) => {
  try {
    const data = fs.readFileSync(process.cwd() + "/data/users.json");
    const users = JSON.parse(data);
    const rand = Math.floor(Math.random() * users.length);
    res.status(200).json({ data: users[rand] });
  } catch {
    res.status(500).json({ error: "Somthing went wrong!" });
  }
};

exports.saveUser = (req, res) => {
  try {
    const data = fs.readFileSync(process.cwd() + "/data/users.json");
    const users = JSON.parse(data);
    const tmpUser = {
      id: req.body.id,
      name: req.body.name,
      gender: req.body.gender,
      address: req.body.address,
      contact: req.body.contact,
      photoUrl: req.body.photoUrl,
    };
    if (!tmpUser.id) {
      return res.status(400).json({ error: "ID required." });
    }
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
    const checkUser = users.find((it) => it.id === tmpUser.id);
    if (checkUser) {
      return res.status(400).json({ error: "Duplicate ID!" });
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

exports.updateUser = (req, res) => {
  try {
    const data = fs.readFileSync(process.cwd() + "/data/users.json");
    let result = JSON.parse(data);
    const tmpData = req.body;
    console.log(tmpData);
    const id = tmpData.id;
    if (!id) {
      return res.status(400).json({ error: "Invalid content!" });
    }
    const indx = result.findIndex((item) => item.id === tmpData.id);
    result[indx] = { ...result[indx], ...tmpData };
    fs.writeFile(
      process.cwd() + "/data/users.json",
      JSON.stringify(result, null, 2),
      () => {
        res.status(200).json({ data: { id } });
      }
    );
  } catch {
    res.status(500).json({ error: "Somthing went wrong!" });
  }
};

exports.deleteUser = (req, res) => {
  try {
    const data = fs.readFileSync(process.cwd() + "/data/users.json");
    const result = JSON.parse(data);
    const { id } = req.body;
    const checkUser = result.find((it) => it.id === id);
    if (checkUser) {
      const newData = result.filter((item) => item.id !== id);
      fs.writeFile(
        process.cwd() + "/data/users.json",
        JSON.stringify(newData, null, 2),
        () => {
          res.status(200).json({ data: { id } });
        }
      );
    } else {
      res.status(400).json({ error: "Ivalid ID!" });
    }
  } catch {
    res.status(500).json({ error: "Somthing went wrong!" });
  }
};
