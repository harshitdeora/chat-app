export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const {senderId}=req.userId;

        await conversatio
    } catch (error) {
        console.log("Error in login controller: ",error.message);
        res.status(500).json({message:"Internal Server Error"});
    } 
};