const express = require('express');
const morgan = require('morgan');
const body_parser = require('body-parser');
const created_error = require('http-errors');

const app = express();

app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

const middleware = (req,res,next)=>{
    console.log('middle ware working');
    const login = false;
    if(login)
    {
        next();
    }
    else{
        return res.status(401).json({message:'you are not login.please login first'});
    }
}

// to fatch or read home page
app.get('/',(req,res)=>{
    res.send('this is http home page');
});

// to fatch or read api profile page
app.get('/api/profile',middleware,(req,res)=>{
    console.log('user profile are running');
    res.status(200).send({
        message:'this is http user profile page',
    });
});

// if i want to fatch an unknown url then then it handle the error
// it also handle clint error
app.use((req,res,next)=>{
    next(created_error(404,'route not found'));
});


// it use for handling server error
app.use((error,req,res,next)=>{
    console.error(error.stack);
    res.status(error.status || 500).json({message:'server side error occured'});
});

module.exports = app;