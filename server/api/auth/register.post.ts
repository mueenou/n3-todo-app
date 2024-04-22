import { User } from "~/server/models/User";

import bcrypt from "bcrypt";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.username || !body.password || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Missing required fields",
    });
  }

  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(body.password, salt);

  const user = await User.create({ ...body, password: hashedPassword });
  return { ...user.toObject(), password: undefined };
});
