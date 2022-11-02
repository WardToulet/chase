import dotenv from 'dotenv';
import Knex from 'knex';

dotenv.config();

export const knex = Knex({
  client: 'mysql2',
  connection: process.env.MYSQL_CONNECTION,
})
