import { Task } from "~/server/models/Task";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Missing required fields",
    });
  }

  const task = await Task.create({ ...body });
  return task.toObject();
});
