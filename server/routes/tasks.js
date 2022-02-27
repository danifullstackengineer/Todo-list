import express from 'express';
import addTask from '../controllers/addTask.js';
import getTasks from '../controllers/getTasks.js';
import removeTask from '../controllers/removeTask.js';
import removeAllTasks from '../controllers/removeAllTasks.js';
import getTask from '../controllers/getTask.js';
import updateTask from '../controllers/updateTask.js';

const router = express.Router();

router.get('/', getTasks)
router.post("/addTask", addTask);
router.get('/getTasks', getTasks)
router.post('/removeTask/:id', removeTask);
router.get('/removeAllTasks', removeAllTasks)
router.post('/getTask', getTask)
router.post('/updateTask/:id', updateTask)

export default router;