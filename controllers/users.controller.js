const bcrypt = require("bcrypt");
const knex = require("../db");

const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = {
      username,
      password: await bcrypt.hash(password, 10),
    };
    const payload = { username: data.username, password: data.password };
    const result = await knex("users").insert(payload);
    if (result) {
      return res.status(201).send({
        status: "success",
        data: payload,
        result: result,
      });
    } else {
      return res.status(409).send("invalid");
    }
  } catch (error) {
    console.log(error);
  }
};

const allUser = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signUp, allUser };
