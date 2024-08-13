"use client";

import { submitRegistrationData } from "@/app/lib/actions";
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // @ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      phone: '',
      name: '',
      password: '',
      confirmPassword: ''
    };

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handle submit");

    console.log('Form submitted:', formData);
    await submitRegistrationData(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Daftar</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Daftar
      </button>
    </form>
  );
};
