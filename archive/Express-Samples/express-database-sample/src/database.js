const pgp = require('pg-promise')(/* options */);

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'test_db',
  user: 'root',
  password: 'root'
}
const db = pgp(cn);

module.exports = {
  pgp, db
}