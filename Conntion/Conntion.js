import SQlLib from 'mysql2'

var SqlCon = SQlLib.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"assignment_four_db"
})

export default SqlCon