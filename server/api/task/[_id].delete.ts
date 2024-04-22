import { Task } from "~/server/models/Task";

// delete task
export default defineEventHandler(async (event) => {
  try {
    const { _id } = event.context.params;
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found",
        message: "Task not found",
      });
    }
    return { message: "Task deleted successfully" };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Something went wrong",
    });
  }
});
