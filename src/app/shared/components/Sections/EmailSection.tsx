"use client"
import React, { useState } from 'react';

interface EmailSectionProps {
  // additional props 
}

const EmailSection: React.FC<EmailSectionProps> = () => {
  const [email, setEmail] = useState('');
  const [clothingPreference, setClothingPreference] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic here to handle form submission, e.g., send the data to your server
    console.log('Email:', email);
    console.log('Clothing Preference:', clothingPreference);
    // You can make an API call to submit the data
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6">
      <h2 className="text-2xl font-bold mb-4">JOIN OUR NEWSLETTER</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">EMAIL</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CLOTHING PREFERENCE</label>
          <select
            value={clothingPreference}
            onChange={(e) => setClothingPreference(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="Men's">Men's</option>
            <option value="Women's">Women's</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            SIGN UP
          </button>
        </div>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        By submitting this form, you agree to our Privacy Policy and to receive Email Marketing from BOXRAW.
      </p>
    </div>
  );
};

export default EmailSection;
