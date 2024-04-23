'use client';

import React, { useState } from 'react';

const CarDetailsForm: React.FC<{ vehicleID: number }> = ({ vehicleID }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://5fb38e55b6601200168f78c7.mockapi.io/api/v1/interview-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, vehicleID })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormData({
        name: '',
        email: '',
        telephone: ''
      });

      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 mr-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 border rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 border rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Telephone</label>
        <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required className="mt-1 p-2 border rounded-md w-full" />
      </div>
      <button type="submit" className="bg-[rgb(0,128,128)] text-white px-4 py-2 rounded-md">Submit</button>
    </form>
  );
};

export default CarDetailsForm;
