import { Router } from "express"

import {AddProducts, GetAllProducts , UpdateProducts,DeleteProducts,GetProductsByID,GetProductsByPrice, GetCountProducts} from "./Controller/Product.js"

const router = Router()


router.get('/AllProducts',GetAllProducts)

router.post('/AddProduct',AddProducts)

router.put('/UpdateProducts/:id',UpdateProducts)

router.delete('/DeleteProduct/:id',DeleteProducts)

router.get('/GetProductByID/:id',GetProductsByID)

router.get('/GetProductByPrice/:price',GetProductsByPrice)

router.get('/GetCountProducts',GetCountProducts)

export default router
