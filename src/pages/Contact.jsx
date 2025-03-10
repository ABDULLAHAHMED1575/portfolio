import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oox1078",
        "template_qadzg4h",
        e.target,
        "y7oRts_uzWGZorSAQ"
      )
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          setSuccess(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("Failed...", err);
          setError(true);
        }
      );
  };

  return (
    <section className="py-16 px-5 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        📩 Contact Me
      </h2>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mb-8">
        <Link
          to={"https://github.com/ABDULLAHAHMED1575"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-400 hover:text-yellow-400 transition"
        >
          <FaGithub />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/abdullahmed1/"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-400 hover:text-yellow-400 transition"
        >
          <FaLinkedin />
        </Link>
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-center text-gray-300 mb-4">
          Feel free to reach out to me! I'm always open to discussing new projects, collaborations, or any tech-related chat.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 py-2 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          Send Message
        </button>
      </form>
      </div>
        {success && <p className="text-green-400 mt-3">Message sent successfully!</p>}
        {error && <p className="text-red-400 mt-3">Failed to send message. Try again.</p>}
    </section>
  );
};

