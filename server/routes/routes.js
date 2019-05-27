const express = require('express');

const userController = require('../controller/userController');
const internController = require('../controller/internController');

const router = express.Router();

router.route('/interns').get(internController.getAll);
router.route('/intern/:id').get(internController.get);
router.route('/intern/:id').put(internController.update);
router.route('/intern/').post(internController.insert);
router.route('/intern/:id').delete(internController.remove);

router.route('/login').post(userController.login);
router.route('/register').post(userController.insert);

module.exports = router;