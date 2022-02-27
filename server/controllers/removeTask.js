import Task from '../models/tasks.js';

const removeTask = async (req, res) => {
    try {
        console.log('task removed!')
    }
    catch(err){
        console.log("couldn't remove task!")
    }
}

export default removeTask;