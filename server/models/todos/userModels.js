import mongoose  from "mongoose";
//read Mongoode Documentation

const userSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true,
            lowercase : true
            
        },
        isActive:{type:Boolean},
        email :{type: String , required: true , unique: true ,lowercase:true},
        password: {type: String , required: [true , 'Password must be Required']}
    },{timestamps : true}
)


export const User = mongoose.model("User" , userSchema);
