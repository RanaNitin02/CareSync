import User from "../models/user.model.js";
import Doctor from '../models/doctor.model.js'
import Bookings from "../models/booking.model.js";


export const updateUser = async (req, res) => {

    const id = req.params.id;

    try {
        
        const updateUser = await User.findByIdAndUpdate(id, {$set: req.body}, { new: true });
        
        res.status(200).json({success: true, message: 'Successfully updated' , data: updateUser});

    } catch (error) {
        res.status(500).json({success: false, message: 'failed in updation of user'});
    }
}


export const deleteUser = async (req, res) => {

    const id = req.params.id;

    try {
        
        await User.findByIdAndDelete(id);
        
        res.status(200).json({success: true, message: 'Successfully user deleted' , data: deleteUser});

    } catch (error) {
        res.status(500).json({success: false, message: 'failed to delete user'});
    }
}


export const getSingleUser = async (req, res) => {

    const id = req.params.id;

    try {
        
        const user = await User.findById(id).select("-password");
        
        
        res.status(200).json({success: true, message: 'Successfully found user', data: user});

    } catch (error) {
        res.status(500).json({success: false, message: 'failed in finding user'});
    }
}


export const getAllUser = async (req, res) => {

    try {
        
        const users = await User.find({}).select("-password");
        
        res.status(200).json({success: true, message: 'Successfully found allUsers', data: users});

    } catch (error) {
        res.status(500).json({success: false, message: 'failed in finding alluser'});
    }
}


export const getUserProfile = async (req, res) => {

    const userId = req.userId;

    try {
        
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({success: false, message: 'User not found'})
        }

        const {password, ...rest} = user._doc

        res.json({success: true, message: 'Profile info is getting', data: {...rest}})

    } catch (error) {
        res.status(500).json({success: false, message: 'failed in getting user profile'});
    }
}

export const getMyAppointments = async(req, res) => {

    try {
        
        // retrieve appointments from booking
        const bookings = await Bookings.find({user: req.userId})

        // extract doctor ids from appointment
        const doctorsIds =  bookings.map(ele => ele.doctor.id)

        // extract doctors from doctor ids
        const doctors = await Doctor.find({_id: {$in: doctorsIds}}).select('-password')

        res.json({success: true, message: 'Appointments are getting', data: doctors})

    } catch (error) {
        res.status(500).json({success: false, message: 'failed in getting my appointments'});
    }
}
