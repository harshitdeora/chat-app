import jwt from "jsonwebtoken";

const protectRoute =async (req, res, next) => {
    const token = req.cookies.jwt;
    if(!token) {
        return res.status(401).json({error:"Unauthorized-No token provided "});
    }

    const decoded=jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded) {
        return res.status(401).json({error:"Unauthorized-Token is invalid"});
    }
    
    const user=await User.findById(decoded.userId).select("-password");
    if(!user) {
        return res.status(401).json({error:"Unauthorized-User not found"});
    }
    req.userId=user._id;
    next();
};
export default protectRoute;