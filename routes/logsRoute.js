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
router.get('/logs/:id', logsController.show)
// "delete" route
router.delete('/logs/:id', logsController.delete)
// "edit" route
router.get('/logs/:id/edit', logsController.edit)

module.exports = router
