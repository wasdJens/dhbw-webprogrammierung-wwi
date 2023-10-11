import pgp from 'pg-promise';

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'test_db',
  user: 'root',
  password: 'root'
}
const db = pgp(cn);

export default {
  pgp, db
}