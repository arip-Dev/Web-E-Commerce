import Footer from "../Footer";
import Navbar from "../Navbar";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handler saat input berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data terkirim:', formData);

    // Di sini bisa kirim ke backend pakai fetch() atau axios jika ada server
    // Reset form jika ingin
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-5 py-24 h-screen">
      <div className="mb-12 flex w-full flex-col text-center">
        <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we'd love to hear from you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto md:w-2/3 lg:w-1/2">
        <div className="-m-2 flex flex-wrap">
          {/* Name Field */}
          <div className="w-1/2 p-2">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="w-1/2 p-2">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-4 w-full p-2">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-6 text-white outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full p-2 flex flex-col">
            <button
              type="submit"
              className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"
            >
              Submit
            </button>
          <span className="text-center mt-2">Untuk saat ini hasil form ditampilkan di console log</span>
          </div>
        </div>
      </form>

      {/* Footer */}
            <div className="mt-15 flex  w-full border-none justify-center items-center p-4">
              <span className="inline-flex gap-5">
                <a className="text-white" href="https://www.facebook.com/home.php" target="_blank">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-4 text-white" href="https://x.com/i/flow/login" target="_blank">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-4 text-white" href="https://www.instagram.com/" target="_blank">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a className="ml-4 text-white" href="#">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactSection