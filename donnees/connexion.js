const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: '51.222.140.74',
    max: 20,
    database: 'projetmobile',
    password: 'rootUser',
    port: 2500,
})

pool.query('SELECT geometry FROM json_table WHERE id=10', (err, res) => {
  console.log(res['rows'][0]['geometry']);  
  pool.end()
})
