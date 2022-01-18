

const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'projet_db',
    max: 20,
    database: 'postgres',
    password: 'admin',
    port: 5432,
})

pool.query('SELECT geometry FROM json_table WHERE id=10', (err, res) => {
  //console.log(res['rows'][0]['geometry']);  
  pool.end()
})

