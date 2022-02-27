import Task from '../models/tasks.js';

const addTask =  async (req,res) => {

    const task = req.body

    const newTask = new Task(task);

   try {
        await newTask.save();
        res.status(201).send("Added task!!")
   }
   catch(err) {
       res.status(409).send("Couldn't add your taks!!!")
   }
}
export default addTask;