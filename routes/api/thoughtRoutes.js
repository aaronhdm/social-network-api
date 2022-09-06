const router = require('express').Router();

const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  createReaction,

} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought);

router.route('/:thoughtId/reactions')
.post(createReaction);

module.exports = router;