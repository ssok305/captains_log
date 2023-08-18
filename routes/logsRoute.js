const express = require('express')

const router = express.Router();

const logsController = require('../controllers/logsController');

router.get('/logs', logsController.index)

// "show" route
router.get('/logs/:id', logsController.show)

// "new" route
router.get('/new', logsController.new)

// "create" route
router.post('/logs', logsController.create)

// "edit" route
router.get('/logs/:id/edit', logsController.edit)

// "update" route
router.patch('/logs/:id', logsController.update)

// "delete" route
router.delete('/logs/:id', logsController.delete)


module.exports = router
