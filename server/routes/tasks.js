import express from 'express';
import addTask from '../controllers/addTask.js';
import getTasks from '../controllers/getTasks.js';
import removeTask from '../controllers/removeTask.js';
import removeAllTasks from '../controllers/removeAllTasks.js';

const router = express.Router();

router.get('/', getTasks)
router.post("/addTask", addTask);
router.get('/getTasks', getTasks)
router.get('/removeTask', removeTask);
router.get('/removeAllTasks', removeAllTasks)

export default router;