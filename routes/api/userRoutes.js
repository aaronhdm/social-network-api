const router = require('express').Router();

const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  addFriend,
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

router.route('/:userId')
.get(getSingleUser)
.put(updateUser);

router.route('/:userId/friends/:friendId')
.post(addFriend);

module.exports = router;