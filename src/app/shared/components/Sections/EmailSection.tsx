"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import Button from '../FormElements/Button';

interface EmailSectionProps {
  // additional props
}

const EmailSection: React.FC<EmailSectionProps> = () => {
  const [email, setEmail] = useState('');
  const [clothingPreference, setClothingPreference] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Clothing Preference:', clothingPreference);
  };

  return (
    <div className="mx-auto w-screen mt-8 p-6 flex flex-col lg:flex-row">
      <div className='div-1 flex-1 lg:mb-0 mb-4 lg:ml-4'>
        <h2 className="text-2xl font-bold mb-2 font-sans">JOIN OUR NEWSLETTER</h2>
        <p className="text-gray-600 font-serif italic ">Subscribe to receive updates, access to exclusive deals, and more.</p>
      </div>

      <div className='div-2 flex-1'>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='font-sans'>
            <label className="block text-sm font-bold text-gray-700">EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Clothing Preference Dropdown */}
          <div>
            <label className="block text-sm font-bold text-gray-700">SHOE CATEGORY</label>
            <select
              value={clothingPreference}
              onChange={(e) => setClothingPreference(e.target.value)}
              className="mt-1 mb-4 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="">Select</option>
              <option value="Men's">Men's</option>
              <option value="Women's">Women's</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md hover:bg-[#fdb49c] focus:outline-none focus:ring focus:border-blue-300"
            >
              SIGN UP
            </button>
          </div>
        </form>

        {/* Privacy Policy */}
        <p className="mt-6 text-sm text-center text-gray-700">
          By submitting this form, you agree to our <Link href="/" className='underline hover:text-blue-500'>Privacy Policy</Link> and to receive Email Marketing from BOXRAW.
        </p>
      </div>
    </div>
  );
};

export default EmailSection;
