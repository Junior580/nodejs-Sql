const User = require("../models/Users");
module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        return res.status(200).json(users);
    },

    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });
        return res.status(200).json(user);
    },
};
