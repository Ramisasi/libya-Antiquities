
import Expslib from 'express'

import UserRouter from  './modules/User/User.router.js'
import ProductRouter from  './modules/product/product.router.js'
import cor from 'cors'
const app = Expslib()
app.use(cor())
app.use(Expslib.json())
app.use(UserRouter)
app.use(ProductRouter)

app.listen(3000 , () =>{
    console.log('Server id run')
})