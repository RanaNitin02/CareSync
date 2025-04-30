import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Doctor from '../models/doctor.model.js';


const generateToken = (user) => {
    return jwt.sign({user: user._id, role: user.role}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    })
}


export const register = async (req, res) => {

    const { name, email, password, role, gender, photo } = req.body

    try {

        let user = null;

        if (role === 'patient') {
            user = await User.findOne({ email })
        }
        if (role === 'doctor') {
            user = await Doctor.findOne({ email })
        }

        if (user) {
            return res.status(400).json({ status: false, message: "User already exists, check user controller" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        if (role === 'patient') {
            user = await new User({ name, email, password: hashPassword, role, gender, photo })
        }
        if (role === 'doctor') {
            user = await new Doctor({ name, email, password: hashPassword, role, gender, photo })
        }

        await user.save();

        return res.status(200).json({ status: true, message: "User created successfully" })

    } catch (error) {
        return res.status(500).json({ status: false, message: "Error creating user, check user controller" })
    }
}


export const login = async (req, res) => {

    const { email } = req.body;

    try {

        let user = null;

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient
        } if (doctor) {
            user = doctor
        }

        if (!user) {
            return res.status(400).json({ status: false, message: "User does not exist, check user controller" })
        }

        const isPasswordMatched = await bcrypt.compare(req.body.password, user.password)

        if (!isPasswordMatched) {
            return res.status(400).json({ status: false, message: "wrong password, Please enter valid password" })
        }

        const token = generateToken(user);

        const {password, role, appointments, ...rest} = user._doc;

        return res.status(200).json({ status: true, message: "Login successful", token, data: {...rest} })

    } catch (error) {

        return res.status(500).json({ status: false, message: "Error logging in, check user controller" })
    }
}