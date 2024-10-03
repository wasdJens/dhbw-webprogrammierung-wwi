import pgPromise from 'pg-promise';

const pgp = pgPromise({});

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'test_db',
  user: 'root',
  password: 'root'
}
const db = pgp(cn);

export default db;