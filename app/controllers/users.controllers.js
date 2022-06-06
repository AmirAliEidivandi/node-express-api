const asyncWrapper = require("../middleware/async");
const User = require("../models/users.model");

const postUser = asyncWrapper(async (req, res) => {});

const getAllUsers = asyncWrapper(async (req, res) => {});

const getOneUser = asyncWrapper(async (req, res) => {});

const updateUser = asyncWrapper(async (req, res) => {});

const deleteUser = asyncWrapper(async (req, res) => {});

module.exports = {
    postUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
};
