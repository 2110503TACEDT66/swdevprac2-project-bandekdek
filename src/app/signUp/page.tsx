"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import userSignUp from "@/libs/userSignUp";
import Link from "next/link";

const RegistrationForm = () => {
  const [isFill, SetIsFill] = useState(true);
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
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.telephone
    ) {
      SetIsFill(false);
      return;
    }
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
        {!isFill && (
          <div role="alert" className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: Pls fulfill all information!</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
