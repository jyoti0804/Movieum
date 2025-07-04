import React, { useState } from 'react';

const ContactUs = () => {
  document.title = "Jyoti OTT | Contact Us";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the following alert with your form submission logic
    alert(`Form submitted: ${JSON.stringify(formData)}`);
    setIsSubmitted(true);

    // Example using EmailJS (uncomment and configure EmailJS)
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //   .then((result) => {
    //     console.log(result.text);
    //     setIsSubmitted(true);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl text-zinc-800 font-bold mb-8">Contact Us</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block text-zinc-600 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-zinc-600 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-zinc-600 mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-zinc-600 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl text-zinc-800 font-semibold mb-4">Thank You!</h2>
            <p className="text-zinc-600">Your message has been sent. We'll get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
