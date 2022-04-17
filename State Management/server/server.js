//import node modules
//require() is the predefined function, used to import the modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");


//rest api's
//rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest api's
//GET,POST,PUT,DELETE,...........


//enable the ports communication
app.use(cors());


//backend receiving the data from frontend in the form of a json
//MIME
app.use(express.json());


//check the headers
//middleware
const middleware = (req,res,next)=>{
    const allHeaders = req.headers;
    if(allHeaders.token == "abc123"){
        next();
    }else{
        res.json({"message":"authentication error"});
    }
}

//create the ref variable
const ashokIT = mongodb.MongoClient;


//POST Request
app.post("/login",[middleware],(req,res)=>{
    const user_name = req.body.uname;
    const user_password = req.body.upwd;

    ashokIT.connect(`mongodb+srv://admin:admin@workshop.ymw1c.mongodb.net/my_db?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("my_db");
            db.collection("login_details").find({"uname":user_name,"upwd":user_password}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        res.json({"login":"success"});
                    }else{
                        res.json({"login":"fail"});
                    }
                }
            })
        }
    })

});



//assign port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});













