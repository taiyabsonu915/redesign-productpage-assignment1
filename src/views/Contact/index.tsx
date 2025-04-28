import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form className="mt-5">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;