import Task from "models/Task";
import { dbConnect } from "utils/mongoose";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ msg: "Task not found" });
        return res.status(200).json(task);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const updateTask = await Task.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!updateTask) return res.status(404).json({ msg: "Task not found" });
        return res.status(200).json(updateTask);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deleteTask = await Task.findByIdAndDelete(id);
        if (!deleteTask) return res.status(404).json({ msg: "Task not found" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return res.status(400).json({ msg: "this method is not supported" });
  }
};
