import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize(
  'network' as string,
  'postgres' as string,
  'qwerty' as string,
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433
  }
)
