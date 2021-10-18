//const mongoose= require('mongoose');
import mongoose from 'mongoose';
const Schema= mongoose.Schema
const DataSchema= new Schema({
   
    projectName:{
        type: String,
        required: true,
    },
    logoUrl:{
        type: String,
        required: true,
    },

    
    fromDate:{
        type: String,
        required: true,
    },
    toDate:{
        type: String,
        required: true,
    },
  ownerDid:{
        type: String,
        required: true,
    },
    projectDid:{
        type: Number,
        required: true,
    },

    
    projectStatus:{
        type: Boolean,
        required: true,
    },
    blockchainType:{
        type: String,
        required: true,
    },
    themeColor:{
        type: String,
        required: true,
    },
    fontColor:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
    }
    
    
},{ timestamps:true});

// creating product model with Project as  database name
const Project= mongoose.model('Project', DataSchema); //Creating a constant to store model in it
export default Project;