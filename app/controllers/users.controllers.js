const asyncWrapper = require("../middleware/async");
const User = require("../models/users.model");

const postUser = asyncWrapper(async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
});

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

const updateUser = asyncWrapper(async (req, res) => {
    const user = await User.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!user) {
        res.status(404).json("No user with id: ", req.params.id);
    }
    res.status(200).json(user);
});

const deleteUser = asyncWrapper(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        res.status(404).json("No user with id: ", req.params.id);
    }
    res.status(200).json("user has been deleted...");
});

module.exports = {
    postUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
};
