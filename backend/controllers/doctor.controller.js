import Doctor from "../models/doctor.model.js";
import Bookings from "../models/booking.model.js";


export const updateDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: updateDoctor });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update doctor' });
    }
};


export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        await Doctor.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted doctor' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete doctor' });
    }
};


export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findById(id).populate("reviews").select("-password");
        res.status(200).json({ success: true, message: 'Doctor found successfully', data: doctor });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to find doctor' });
    }
};


export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors;
        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { specialization: { $regex: query, $options: 'i' } }
                ]
            }).select("-password");
        } else {
            doctors = await Doctor.find({ isApproved: 'approved' }).select("-password");
        }
        res.status(200).json({ success: true, message: "All doctors retrieved successfully", data: doctors });
    } catch (error) {
        console.error("Error in getAllDoctor:", error);
        res.status(500).json({ success: false, message: `Failed to fetch doctors: ${error.message}` });
    }
};


export const getDoctorProfile = async (req, res) => {
    const docId = req.userId;

    try {

        const doctor = await Doctor.findById(docId).select("-password");

        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        const { password, ...rest } = doctor._doc
        const appointments = await Bookings.find({ doctor: docId });

        res.status(200).json({ success: true, message: "Getting doctor profile", data: {...rest, appointments} });

    } catch (error) {
        console.error("Error fetching doctor profile:", error);
        res.status(500).json({ success: false, message: "Failed to retrieve doctor profile" });
    }
};