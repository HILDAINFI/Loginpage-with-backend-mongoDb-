const mongoose=require("mongoose")

mongoose.connect('mongodb+srv://Hilda:hilda@cluster0.1uxpkss.mongodb.net/LoginFormPractice')
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection