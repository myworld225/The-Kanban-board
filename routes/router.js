var express = require('express');
var router = express.Router();
var task = require('../controllers/task-controllers');

router.get('/', task.list);
router.post('/createTask', task.create);
router.post('/updateTask',task.update);
router.post('/removeTask',task.remove);

module.exports = router;