const { Pool, Client } = require('pg')

const pool = new Pool()
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const res = await pool.query('SELECT NOW()')
await pool.end()

const client = new Client()
await client.connect()
const res = await client.query('SELECT NOW()')
await client.end()

PGHOST='localhost'
PGUSER=process.env.USER
PGDATABASE=process.env.USER
PGPASSWORD=witpark
PGPORT=7897

function getTable(tableName){
  pool.query("SELECT * from tableName", (err, res)=>{
    console.log(err,res)
    pool.end()
  })
}