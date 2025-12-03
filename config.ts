import z, { config } from 'zod';

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
  NEXT_PUBLIC_URL: z.string(),
  DB_USER: z.string(),
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  DB_USER: process.env.DB_USER,

});

if (!configProject.success) {
    console.error(configProject.error.errors)
    throw new Error("Cac khai bao bien moi truong ko hop le!!!")
}

const envConfig = configProject.data

export default envConfig;