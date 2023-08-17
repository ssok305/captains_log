const express = require('express')

const router = express.Router();

const logsController = require('../controllers/logsController');

router.get('/logs', logsController.index)

// "new" route
router.get('/new', logsController.new)

// "update" route
// router.put('/:id', logsController.update)

// "create" route
router.post('/logs', logsController.create)

// "show" route
router.get('/:id', logsController.show)

module.exports = router