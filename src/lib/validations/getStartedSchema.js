import { z } from 'zod';

export const getStartedSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters'),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters'),

  businessEmail: z
    .string()
    .min(1, 'Business email is required')
    .email('Please enter a valid email address')
    .refine(
      (email) => !email.match(/@(gmail|yahoo|hotmail|outlook|aol|icloud|protonmail)\./i),
      'Please use your business email address'
    ),

  phoneNumber: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length === 0 || /^[\d\s\-\+\(\)]+$/.test(val),
      'Please enter a valid phone number'
    ),

  company: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be less than 100 characters'),

  jobTitle: z
    .string()
    .min(1, 'Job title is required')
    .max(100, 'Job title must be less than 100 characters'),

  state: z
    .string()
    .min(1, 'Please select a state'),

  businessGoals: z
    .string()
    .min(20, 'Please provide more detail about your goals (at least 20 characters)')
    .max(1000, 'Please keep your response under 1000 characters'),

  businessOverview: z
    .string()
    .min(30, 'Please provide more detail about your business (at least 30 characters)')
    .max(2000, 'Please keep your response under 2000 characters'),

  emailOptIn: z.boolean().optional().default(false),
});
