import SqlConn  from "../../../Conntion/Conntion.js"

export const GetAllProducts = (req,res,nex) =>{
    SqlConn.execute(`select Product_ID, Product_desc,product_title,firstName,lastName,Img_Pat from user_tb INNER join product_tb on user_tb.ID = product_tb.user_id`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}
export const AddProducts = (req, res,nex) =>{
    const {Desc,Price,Title,User_Id,ImgPat} = req.body
    SqlConn.execute(`insert into product_tb (Product_desc,Product_price,product_title,user_id,Img_Pat) values ('${Desc}' ,0,'${Title}',${User_Id},'${ImgPat}')` , (erre,resul,fil) =>{
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
                res.json({ message: "Fail to add your product" })
            }
        }
    })
}
export const UpdateProducts = (req, res, nex) =>{
    const { id } = req.params
    const {Desc,Price,Title,ImgPat} = req.body;
    SqlConn.execute(`update product_tb set Product_desc ='${Desc}', product_title = '${Title}' , Img_Pat='${ImgPat}' where Product_ID ='${id}'`, (erre,resul,fil) =>{
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
                res.json({ message: "In-valid product ID" })
            }
        }
    })
}

export const DeleteProducts = (req, res, nex) =>{
    const { id } = req.params
    SqlConn.execute(`delete from product_tb where Product_ID = '${id}'`, (erre,resul,fil) =>{
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
                res.json({ message: "In-valid product ID" })
            }
        }
    })
}

export const GetProductsByID = (req,res,nex) =>{
    const{id} =req.params
    SqlConn.execute(`select Product_ID, Product_desc,Product_price,product_title,Img_Pat,firstName,lastName from user_tb INNER join product_tb on user_tb.ID = product_tb.user_id where product_tb.Product_ID = ${id} `,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}

export const GetProductsByPrice = (req,res,nex) =>{
    const{price} =req.params
    SqlConn.execute(`select Product_ID, Product_desc,Product_price,product_title,Img_Pat,firstName,lastName from user_tb INNER join product_tb on user_tb.ID = product_tb.user_id where product_tb.Product_price > ${price} `,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}

export const GetCountProducts = (req,res,nex) =>{
    SqlConn.execute(`SELECT count(Product_ID) FROM product_tb`,(erre, resul,fil) =>{
        if(erre)
        {
            res.json({message:"errer",erre})
        }
        else{
            res.json({ message: "Done", resul })
        }
    })
}