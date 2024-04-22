import { Task } from "~/server/models/Task";

export default defineEventHandler(async (event) => {
  const tasks = await Task.find();
  return tasks;
});
