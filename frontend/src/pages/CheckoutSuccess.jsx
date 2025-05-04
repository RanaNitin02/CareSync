import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <svg
                        viewBox="0 0 24 24"
                        className="w-16 h-16 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                    >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.707 8.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0l-3.536-3.536a1 1 0 111.414-1.414l2.829 2.829 6.364-6.364a1 1 0 011.414 0z"/>
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful</h2>
                <p className="text-gray-600 mb-4">
                    Thank you for completing your secure online payment.
                </p>
                <p className="text-gray-500 mb-6">We appreciate your business. Have a great day!</p>
                <Link
                    to="/home"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default CheckoutSuccess;
