import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(10, "title should be of 10 characters"),
  body: z.string().min(20, "body should be of 20 characters"),
});

export type PostInput = z.infer<typeof postSchema>;
