import User from "../models/user.model.js";
export const getUsersfromSidebar=async(req,res)=>{
    try {
        const loggedInUserid=req.user._id;

        const filteredUsers=await user.find({_id: {$ne: loggedInUserid}});

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersfromSidebar",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};