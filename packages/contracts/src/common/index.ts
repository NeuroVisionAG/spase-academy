import { z } from 'zod';

export const errorResponseSchema = z.object({
  error: z.string(),
  statusCode: z.number(),
  issues: z.array(z.object({
    path: z.array(z.string().or(z.number())),
    message: z.string(),
  })).optional(),
});

export type ErrorResponse = z.infer<typeof errorResponseSchema>;
