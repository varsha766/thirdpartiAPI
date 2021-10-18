import express from 'express';
import mongoose from 'mongoose';
import fetch from "node-fetch";
import Project from './project.js' ;

const app= express();

const DBURI= 'mongodb+srv://Project:varsha123@nodetest.dsj9j.mongodb.net/Project?retryWrites=true&w=majority'

mongoose.connect(DBURI)
.then((result)=>{
    console.log("Database connected successfuly!");
})
.catch((err)=>{
console.error(err);
});

// to enable parsing of json object in the body of request
app. use(express.json());
app.use(express.urlencoded({extended:true}));

//API to call another API i.e third party API

app.get('/project', async(req,res)=>{

//third party URL
const api_url= 'https://stage.hypermine.in/whitelist/api/v1/project/test----give-away?isPublic=true';
const fetch_response= await fetch(api_url);
const result= await fetch_response.json();

const data= new Project(res.json(result)); // creating a new instance of document and save to project collection in DB
data.save().then((result)=>{

});
Project.find({}, (err, data)=>{
    res.json(data);
});
});

app.listen(3000, () =>{
    console.log('starting server at port 3000');
});


//uri='mongodb+srv://project:varsha123@nodetest.dsj9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';