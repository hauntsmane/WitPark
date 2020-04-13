export default class dbFunctions extends Component{
 getTable(tableName){
    pool.query("SELECT * from " + tableName, (err, res)=>{
      console.log(err,res)
      pool.end()
    })
  }

  insertRegistration(user_name, user_pass){
    pool.query(
      "INSERT INTO wp_Users(UserName, pass)VALUES( " + user_name + " , " + user_pass +" )",
      (err, res) => {
        console.log(err, res);
        pool.end();
      }
    );
  }
  
  findValue(table, column, value){
    x = pool.query("SELECT * FROM " + table + " WHERE " + column + " = " + value,
    (err, res) => {
      console.log(err, res);
      pool.end();
    }
    );
    return x
  }

  getOccupancy(column){
    x = pool.query("SELECT Occupancy FROM wp_LotOccupancy WHERE ParkingLot = " + column,
    (err, res) => {
      console.log(err, res);
      pool.end();
    }
    );
    return x
  }
}  