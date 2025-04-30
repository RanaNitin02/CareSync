import Review from '../models/review.model.js';
import Doctor from '../models/doctor.model.js';

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        
        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ success: false, message: "No reviews found" });
        }

        res.status(200).json({ success: true, message: "Reviews retrieved successfully", data: reviews });

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to retrieve reviews", error: error.message });
    }
};

export const createReview = async (req, res) => {
    try {
        if (!req.body.doctor) {
            req.body.doctor = req.params.doctorId;
        }
        if (!req.body.user) {
            req.body.user = req.userId; // Fix: Use `req.userId` from authentication
        }

        const newReview = new Review(req.body);
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.params.doctorId, {
            $push: { reviews: savedReview._id }
        });

        res.status(201).json({ success: true, message: "Review submitted successfully", data: savedReview });

    } catch (error) {
        res.status(500).json({ success: false, message: "Review not submitted", error: error.message });
    }
};
