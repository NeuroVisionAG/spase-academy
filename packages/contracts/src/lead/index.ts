import { z } from 'zod';

export const createLeadSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа').max(50, 'Слишком длинное имя'),
  phone: z.string().regex(/^\+?[0-9\s\-\(\)]{10,20}$/, 'Некорректный номер телефона'),
  courseId: z.string().optional(),
  groupId: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
});

export type CreateLeadRequest = z.infer<typeof createLeadSchema>;

export const createLeadResponseSchema = z.object({
  success: z.boolean(),
  leadId: z.string().optional(),
  message: z.string().optional(),
});

export type CreateLeadResponse = z.infer<typeof createLeadResponseSchema>;
