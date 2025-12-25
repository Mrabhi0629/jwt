import mongoose from "mongoose";
import User from "../models/user.model.js";
import express from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = express.Router();
router.post('/register',async (req,res) => {
    try{
        const {email,password,username} = req.body;
          if (existingUser) return res.status(400).json({ message: 'User already exists' });
        const hasedpassword = await bcrypt.hash(password,10);

        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();

      res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

    



router.post("/login", async(req,res) => {
 try{
       const {email,password} = req.body;
    const user = await  User.find({email});
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });
      res.json({ token });
 }
 catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export const router;



