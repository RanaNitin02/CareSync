import Stripe from 'stripe';
import User from '../models/user.model.js';
import Doctor from '../models/doctor.model.js';
import Booking from '../models/booking.model.js';


export const getCheckoutSession = async (req, res) => {

    try {
        // GET CURRENTLY BOOKED DOCTOR
        const doctor = await Doctor.findById(req.params.doctorId);
        const user = await User.findById(req.userId);

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-session`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email: user.email,
            client_reference_id: req.params.doctorId,
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        unit_amount: doctor.ticketPrice * 100,
                        product_data: {
                            name: doctor.name,
                            description: doctor.bio,
                            images: [doctor.photo],
                        }
                    },
                    quantity: 1
                }
            ]
        });


        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            ticketPrice: doctor.ticketPrice,
            session: session.id
        })

        await booking.save();

        return res.status(200).json({success: true, message: 'Successfully paid', session});
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({success: false, message: 'Error creating checkout session'});
    }
}