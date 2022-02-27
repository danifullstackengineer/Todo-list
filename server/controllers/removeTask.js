import Task from '../models/tasks.js';

const removeTask = async (req, res) => {

    const body = req.body;
    console.log(body)

    try {
        await Task.deleteOne({_id: body.id})
        res.status(209).send("Removed one!")
    }
    catch(err){
        console.log("couldn't remove task!")
    }
}

export default removeTask;