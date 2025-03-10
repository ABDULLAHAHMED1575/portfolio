import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <div className="flex justify-center gap-6 mb-3">
        <Link
          to={"https://github.com/ABDULLAHAHMED1575"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-yellow-400 transition"
        >
          <FaGithub />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/abdullahmed1/"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-yellow-400 transition"
        >
          <FaLinkedin />
        </Link>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Abdullah Ahmed. All rights reserved.</p>
    </footer>
  );
}