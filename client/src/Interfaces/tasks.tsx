export default interface ITasks {
  tasks: [{
    id: string,
    createdAt: string | Date,
    completed: boolean,
    task: string
  } | null]
}
