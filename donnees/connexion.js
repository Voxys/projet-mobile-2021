const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: '51.222.140.74',
    max: 20,
    database: 'projetmobile',
    password: 'rootUser',
    port: 5432,
})
pool.query('SELECT * FROM json_table', (err, res) => {
  console.log(err, res)
  pool.end()
})
// const client = new Client({
//   user: 'postgres',
//   host: '51.222.140.74',
//   max: 20,
//   database: 'projetmobile',
//   password: 'rootUser',
//   port: 5432,
// })
// client.connect()
// client.query('SELECT * FROM json_table', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
