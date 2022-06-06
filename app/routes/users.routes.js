const { getAllUsers, postUser, getOneUser, updateUser, deleteUser } = require("../controllers/users.controllers");

const router = require("express").Router();

router.route("/").get(getAllUsers).post(postUser);
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;
