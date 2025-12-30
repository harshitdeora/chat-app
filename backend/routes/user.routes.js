import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersfromSidebar } from "../controllers/user.controllers.js";


const router = express.Router();

router.get("/",protectRoute,getUsersfromSidebar)

export default router;