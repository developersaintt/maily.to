import { z } from 'zod';

const configSchema = z.object({
  appUrl: z.string(),
  googleTrackingId: z.string().optional(),
  supabase: z.object({
    url: z.string(),
    anonKey: z.string(),
  }),
});

export const config = configSchema.parse({
  appUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://maily-to-9a8889115281.herokuapp.com'
      : 'http://localhost:3000',
  // googleTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
});
