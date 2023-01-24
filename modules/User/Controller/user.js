import SqlConn from "../../../Conntion/Conntion.js"

export const loginControl = (req, res, nex) => {
    const { email, password } = req.body;
    SqlConn.execute(`select ID from user_tb where email='${email}' and password='${password}'`, (erre, resul, fi) => {
        if (erre) {
            res.json({ message: 'Errer', erre })
        }
        else {
            if (resul.length) {
                res.json({ message: 'Done', resul })
            }
            else {
                res.json({ message: 'Email password misMatch' })
            }
        }
    })
}

export const AddUser = (req, res, nex) => {
    const {firstName,lastName,email,password,age} = req.body

    SqlConn.execute(`insert into user_tb (firstName,lastName,email,password,age) values ('${firstName}','${lastName}','${email}','${password}','${age}')`,(erre,resul,fil)=>{
        if (erre) {
            res.json({ message: 'Errer', erre })
        }
        else {
            if (resul.affectedRows) {
                res.json({ message: 'Done', resul })
            }
            else {
                res.json({ message: 'Fail to add User' })
            }
        }
    })
}

export const UpdateUser = (req, res, nex) =>{
    const { id } = req.params
    const {firstName,lastName,email,password,age} = req.body
    SqlConn.execute(`update user_tb set firstName ='${firstName}' , lastName = '${lastName}' , email = '${email}',password = '${password}',age='${age}' where ID  ='${id}'`, (erre,resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            if(resul.affectedRows)
            {
            res.json({ message: "Done", resul })
            }
            else{
                res.json({ message: "In-valid User ID" })
            }
        }
    })
}

export const DeleteUser = (req, res, nex) =>{
    const { id } = req.params
    SqlConn.execute(`delete from user_tb where ID = '${id}'`, (erre,resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            if(resul.affectedRows)
            {
            res.json({ message: "Done", resul })
            }
            else{
                res.json({ message: "In-valid User ID" })
            }
        }
    })
}

export const GetAllUsers = (req,res,nex) =>{
    SqlConn.execute(`select * from user_tb`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}

export const GetUserByStartName = (req,res,nex) =>{
    const{ StartName} = req.params
    SqlConn.execute(`select * from user_tb WHERE firstName like '${StartName}%'`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}

export const GetUserByEndName = (req,res,nex) =>{
    const{ EndName} = req.params
    SqlConn.execute(`select * from user_tb WHERE firstName like '%${EndName}'`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}

export const GetUserById = (req,res,nex) =>{
    const{id} = req.params
    SqlConn.execute(`select * from user_tb WHERE id = 1`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}

export const GetUserBetweenAge = (req,res,nex) =>{
    const{LessAge , HigherAge} = req.body
    SqlConn.execute(`select * from user_tb WHERE age between ${LessAge} and ${HigherAge}`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}

export const GetUserStartNameAndLessAge = (req,res,nex) =>{
    const{LessAge , StartName} = req.body
    SqlConn.execute(`select * from user_tb WHERE firstName LIKE '${StartName}%' and age < ${LessAge}`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}
export const GetUserFirstNameAndlastName = (req,res,nex) =>{
    const{StartName} = req.params
    SqlConn.execute(`select * from user_tb WHERE firstName LIKE '${StartName}%' or lastName LIKE '${StartName}%'`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}

export const GetCountUsers = (req,res,nex) =>{
    SqlConn.execute(`SELECT count(ID) FROM user_tb`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}