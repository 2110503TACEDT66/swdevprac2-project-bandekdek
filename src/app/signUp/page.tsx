"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import userSignUp from "@/libs/userSignUp";
import Link from "next/link";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    telephone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await userSignUp(formData);
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="mt-[60px]">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password..."
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="string"
          placeholder="Telephone..."
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
