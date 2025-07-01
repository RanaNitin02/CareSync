import jwt from 'jsonwebtoken';
import Doctor from '../models/doctor.model.js';
import User from '../models/user.model.js';


export const authenticate = async (req, res, next) => {
    
    const authToken = req.headers.authorization;

    if(!authToken || !authToken.startsWith('Bearer ')){
        return res.status(401).json({ success: false, message: 'No authToken, authorization denied' }); 
    }

    try {
        const token = authToken.split(' ')[1];
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;
        req.role = decoded.role;

        next();
        
    } catch (error) {

        if(error.name === 'TokenExpiredError'){
            return res.status(401).json({ success: false, message: 'Token is expired' });
        }

        console.error('❌ Error:', error);
        return res.status(401).json({ success: false, message: 'Token is not valid' });
    }

};


export const restrict = roles => async (req, res, next) => {
    
    const userId = req.userId;

    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if(patient){
        user = patient;
    }else if(doctor){
        user = doctor;
    }

    if(!roles.includes(user.role)){
        return res.status(403).json({ success: false, message: 'You are not authorized to access this route' });
    }

    next();
};


