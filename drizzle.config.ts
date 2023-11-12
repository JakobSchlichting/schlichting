import { type Config } from 'drizzle-kit';

export default {
    schema: './src/**/*.schema.ts',
    driver: 'turso',
    dbCredentials: {
        url: import.meta.env.DATABASE_URL,
        authToken: import.meta.env.DATABASE_TOKEN,
    },
} satisfies Config;
