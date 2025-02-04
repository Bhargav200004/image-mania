import { pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  email: varchar({ length: 254 }).primaryKey(),
  password: varchar({ length: 40 }).notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
