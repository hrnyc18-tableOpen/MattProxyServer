const router = require('express').Router();
const controller = require('../controllers/controller.js');

router.get('/restaurants', controller.getRestaurants);
router.get('/users', controller.getUsers);
router.get('/reviews', controller.getReviews);
router.get('/user/reviews', controller.getUserReviews);

module.exports = router;