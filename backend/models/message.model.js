import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User",required: true },
        message: { type: String, required: true },
    },
    //created at and upddated at fields are added by defaults 

    { timestamps: true }
);

const Message=mongoose.model("Message",messageSchema);

export default Message;