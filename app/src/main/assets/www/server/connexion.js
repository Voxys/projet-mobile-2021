

const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    max: 20,
    database: 'projetmobile',
    password: 'rootUser',
    port: 2500,
})

pool.query('SELECT geometry FROM json_table WHERE id=10', (err, res) => {
  //console.log(res['rows'][0]['geometry']);  
  pool.end()
})

