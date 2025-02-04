import db from "@/db/postgres";
import { users } from "@/db/schema/auth/users";
import { UserDto } from "@/dto/user.dto";

import { z } from "zod";
import bcrypt from "bcrypt";
import { RestResponse } from "@/types/rest.type";
import logger from "@/utils/logger";
import { eq } from "drizzle-orm";

class AuthService {
  constructor() {}

  static validate(userDto: UserDto) {
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(8),
    });
    return schema.parse(userDto);
  }

  async signup(userDto: UserDto): Promise<RestResponse<string>> {
    try {
      const validatedUser = AuthService.validate(userDto);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(validatedUser.password, salt);

      const newUser = await db
        .insert(users)
        .values({
          email: validatedUser.email,
          password: hashedPassword,
        })
        .returning({ email: users.email });

      return { success: true, status: 201, data: newUser[0].email };
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.error("[auth|signup]: invalid credentials", { error });
        return { success: false, status: 400, message: "invalid credentials" };
      }

      logger.error("[auth|signup]: internal server error", { error });
      return { success: false, status: 500, message: "internal server error" };
    }
  }

  async login(userDto: UserDto): Promise<RestResponse<string>> {
    try {
      const { email, password } = AuthService.validate(userDto);

      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

      if (!existingUser.length) {
        logger.error("[auth|login]: user not found");
        return { success: false, status: 404, message: "user not found" };
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser[0].password
      );

      if (!isPasswordValid) {
        logger.error("[auth|login]: invalid credentials");
        return { success: false, status: 401, message: "invalid credentials" };
      }

      return { success: true, status: 200, data: existingUser[0].email };
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.error("[auth|login]: invalid credentials", { error });
        return { success: false, status: 400, message: "invalid credentials" };
      }

      logger.error("[auth|login]: internal server error", { error });
      return { success: false, status: 500, message: "internal server error" };
    }
  }
}

export default AuthService;
