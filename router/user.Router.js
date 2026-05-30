

import express from "express";
import { createUser } from "../controller/user.Controller.js";


const router =express.Router();



//create user

router.post("/", createUser)


export default router;