const {Client} = require('pg');

const client = new Client({
    host: "51.222.140.74",
    user: "poiuyt1996@hotmail.com",
    port: 5432,
    password: "SamWeb2021@",
    database: "testConnection"
})

client.connect();

client.query('Select * from users', (err, res)=>{
    if(!err){
        console.log(res.row)
    } else {
        console.log(err.message);
    }
    client.end;
})