import { z } from 'zod';

export const submitQuizSchema = z.object({
  answers: z.record(z.string(), z.string()),
  resultSegment: z.string().optional(),
  lead: z.object({
    name: z.string().min(2, 'Имя слишком короткое').optional(),
    phone: z.string().optional(),
  }).optional(),
});

export type SubmitQuizRequest = z.infer<typeof submitQuizSchema>;
