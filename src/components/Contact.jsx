import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex items-center justify-center h-[calc(100vh-20px)] pb-4 lg:pb-0 space-y-6 lg:space-y-0"
    >
      <form
        name="submit-to-google-sheet"
        className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-md shadow-md"
      >
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <input
          type="email"
          name="Email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <textarea
          name="Message"
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
