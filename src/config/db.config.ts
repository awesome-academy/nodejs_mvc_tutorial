import 'dotenv/config'

export const dbConfig = {
  HOST: process.env.DATABASE_HOST,
  DB: process.env.DATABASE_PORT,
  USER: process.env.DATABASE_USER,
  PASS: process.env.DATABASE_PASSWORD,
  USERNAME: process.env.DATABASE_NAME,
  logging: process.env.DB_LOGGING === 'true',
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  dialect: process.env.DB_DIALECT,
  pool: {
    max: parseInt(process.env.CONNECT_POOL_MAX || '5'),
    min: parseInt(process.env.CONNECT_POOL_MIN || '0')
  }
}