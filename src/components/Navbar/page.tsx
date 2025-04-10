"use client"; // Jika menggunakan App Router

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full opacity-1 bg-white/30 backdrop-blur z-50">
      <div className="container mx-auto px-8 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-primary">
            <Link href="/">rizapranata</Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-700 font-bold hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 font-bold hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 font-bold hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Button Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>☰</button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/30 backdrop-blur border-t shadow-md p-4 text-center">
          <Link
            href="#home"
            className="block py-2 text-gray-700 font-bold hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block py-2 text-gray-700 font-bold hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="block py-2 text-gray-700 font-bold hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
