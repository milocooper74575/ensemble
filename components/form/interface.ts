import { z } from "zod";

export const formSchema = z.object({
  id: z.string().min(1, "Model ID is required"),
  temperature: z.number().min(0).max(1),
  maxTokens: z.number().min(0).max(8192),
});

export interface ModelFormProps {
  onSubmit?: (data: z.infer<typeof formSchema>) => void;
}
