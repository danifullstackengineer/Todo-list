import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    user: String,
    task: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    finished: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model("Task", taskSchema);