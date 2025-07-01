import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Doctor from '../models/doctor.model.js';


const generateToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });
  }
  
  
  
  export const register = async (req, res) => {
    try {
      const { name, email, password, role, gender, photo } = req.body;
  
      if (!name || !email || !password || !role) {
        return res.status(400).json({ message: "Please fill in all fields" });
      }
  
      let user = null;
  
      if (role === "patient") {
        user = await User.findOne({ email });
      } else if (role === "doctor") {
        user = await Doctor.findOne({ email });
      }
  
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      if (role === "patient") {
        user = new User({
          name,
          email,
          password: hashedPassword,
          photo,
          gender,
          role,
        });
      } else if (role === "doctor") {
        user = new Doctor({
          name,
          email,
          password: hashedPassword,
          photo,
          gender,
          role,
        });
      }
  
      await user.save();
  
      return res.status(201).json({ message: "User created successfully" });
  
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(500).json({ message: "User creation failed", error: error.message });
    }
  };
  
  
  
  export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
        let user = null;
  
        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });
  
        if (patient) {
            user = patient;
        } else if (doctor) {
            user = doctor;
        }
  
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
  
        const isMatch = await bcrypt.compare(password, user.password); 
  
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
  
        const token = generateToken(user);
        const { password: _, role, appointments, ...rest } = user._doc;
  
        return res.status(200).json({
            status: true,
            message: "Successfully logged in",
            token,
            data: { ...rest },
            role,
        });
  
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Login failed", error: error.message });
    }
  };