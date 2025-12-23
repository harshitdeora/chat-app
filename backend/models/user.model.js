import mongoose from "mongoose";

//the given below is the schema 
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum:["male","female"],
    },
    profilePic: {
        type: String,
        default:"",
    },
},
    //created at and upddated at fields are added by defaults 
    { timestamps: true });

//model based on the aboe schema 
const User = mongoose.model("User", userSchema);

export default User;
