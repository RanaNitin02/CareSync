import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto px-6 sm:px-12 bg-white shadow-lg rounded-lg py-10">
        
        <h2 className="text-3xl font-bold text-center text-gray-800">Get in Touch</h2>
        <p className="mt-2 text-center text-gray-600">
          Have questions or need support? Drop us a message and we&apos;ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          
          <div>
            <label htmlFor="email" className="form__label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              rows={5}
              id="message"
              placeholder="Your message here..."
              className="form__input mt-1 resize-none"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-primary hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>

        
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </section>
  );
};

export default Contact;
