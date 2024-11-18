import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formElements = form.current.elements;
    const userName = formElements.user_name.value;
    const userEmail = formElements.user_email.value;
    const message = formElements.message.value;

    // Simple validation
    if (!userName || !userEmail || !message) {
      alert("All fields are required.");
      setLoading(false);
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      alert("Please enter a valid email.");
      setLoading(false);
      return;
    }

    // Send email
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Access from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Access from .env
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID // Access from .env
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setError(true);
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contactus" className="w-4/5 sm:w-4/5 lg:w-3/5 mx-auto mb-8 p-4 sm:p-6">
      <p className="w-full text-center text-4xl sm:text-7xl font-bold text-gray-600 sm:mb-6">
        Get In Touch.
      </p>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-lg sm:text-xl text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-lg sm:text-xl text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="user_mobile" className="block text-lg sm:text-xl text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            name="user_mobile"
            id="user_mobile"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg sm:text-xl text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full min-h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 resize-none text-sm sm:text-base"
            rows="4"
          ></textarea>
        </div>

        {loading && <p className="text-gray-500">Sending...</p>}
        {success && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {error && (
          <p className="text-red-500">
            Error sending message. Please try again.
          </p>
        )}

        <div>
          <button
            type="submit"
            className="w-full text-lg sm:text-xl font-bold bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 focus:outline-none"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
