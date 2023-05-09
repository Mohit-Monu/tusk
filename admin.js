const express=require('express');
const router=express.Router();

router.get("/add-product", (req, res, next) => {
    res.send('<form action ="/product" method="POST"><input type="text" name ="name" placeholder="enter name"><input type="text" name ="size" placeholder="Enter product size"><button type="submit">submit</button></form>')
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})
router.post("/product", (req, res,next) => {
    console.warn(req.body)
    res.redirect('/');
})
module.exports=router;