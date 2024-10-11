import { z } from 'zod';

const userFormInputZodSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export type InvitationUserFormInput = z.infer<
  typeof userFormInputZodSchema
>;

export const userFormInputValidateSchema = z.object({
  users: z.array(
    z.object({
      name: z
        .string()
        .min(1, { message: "入力してください" })
        .max(32, {
          message: "32文字以下で入力してください",
        }),
      email: z.string().min(1, { message: "入力してください" }),
    })
  ),
});
