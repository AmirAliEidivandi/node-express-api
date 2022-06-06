const asyncWrapper = require("../middleware/async");
const User = require("../models/users.model");

const postUser = asyncWrapper(async (req, res) => {});

const getAllUsers = asyncWrapper(async (req, res) => {
    const getUsers = await User.find({});
    res.status(200).json(getUsers);
});

const getOneUser = asyncWrapper(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404).json("No user with id: ", req.params.id);
    }
    res.status(200).json(user);
});

const updateUser = asyncWrapper(async (req, res) => {});

const deleteUser = asyncWrapper(async (req, res) => {});

module.exports = {
    postUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
};
