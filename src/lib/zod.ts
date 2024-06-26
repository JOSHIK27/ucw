import { object, string, z } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const universityFormSchema = object({
  university: string().min(5).max(20),
  country: string().max(20).min(3),
});

export const profSchema = object({
  prof: string().min(5).max(25),
});

export const courseSchema = object({
  name: string().min(5).max(25),
});

export const multiFormSchema = object({
  university: object({ value: z.string(), label: z.string() }),
  course: object({ value: z.string(), label: z.string() }),
  year: object({ value: z.number(), label: z.number() }),
  experience: string().min(10).max(400),
  overallStars: z.number().min(1).max(5),
  courseDepthStars: z.number().min(1).max(5),
  recommendStars: z.number().min(1).max(5),
});
