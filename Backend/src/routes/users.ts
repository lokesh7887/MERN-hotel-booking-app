import express, {Request,Response} from "express";
import User from "../model/user";
import jwt from "jsonwebtoken"
import { check, validationResult } from 'express-validator';

const router= express.Router();

// /api/users/register
router.post("/register",[
    check("firstName","First Name is required").isString(), //we used express validator here as middleware for chcking about the correct input is comming or not
    check("lastName","Last Name is required").isString(),
    check("email","Email is not valid").isEmail(),
    check("password","Password must be at least 6 characters long and contain a number").isLength({min:6}),
], async(req:Request,res:Response)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array() })
    }
    try{
             let user=await User.findOne({
                email: req.body.email,
             });

             if(user){
                return res.status(400).json({message:"Email already in use"});
             }

             user=new User(req.body);
             await user.save();
             const token = jwt.sign({userId : user.id},process.env.JWT_SECRET_KEY as string,{
                expiresIn:'1d',
             });
         res.cookie("auth_token", token, {
            httpOnly: true,
            secure:process.env.NODE_ENV === "production",
            maxAge:86400000,
         })
         return res.status(200).send({message:"User registered OK"});
    }catch(error){
        console.log(error);
          res.status(500).send({message:"something went wrong"})
    }
});

export default router;