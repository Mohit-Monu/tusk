const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');


app.use(adminRoutes);
app.use(shopRoutes);



app.listen(4000)