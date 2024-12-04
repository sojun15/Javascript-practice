let express = require('express');
let app = express();
let path = require('path');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(5500,(req,res)=>{
    console.log("it's workd");
})