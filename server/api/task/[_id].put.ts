import { Task } from "~/server/models/Task";

// update task
export default defineEventHandler(async (event) => {
  try {
    const { _id } = event.context.params;
    const body = await readBody(event);
    const task = await Task.findByIdAndUpdate(
      _id,
      { name: body.name },
      { new: true }
    );
    if (!task) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found",
        message: "Task not found",
      });
    }
    return task.toObject();
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Something went wrong",
    });
  }
});
