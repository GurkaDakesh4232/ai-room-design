import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://design_owner:P1h8wRbTWisS@ep-delicate-credit-a5uez2k2.us-east-2.aws.neon.tech/design?sslmode=require',
  },
});
