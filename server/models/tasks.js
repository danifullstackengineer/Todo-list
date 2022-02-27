import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    task: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    completed: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model("Task", taskSchema);