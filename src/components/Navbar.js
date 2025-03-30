'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Fetch user details after component mounts
  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get('token'); 
      if (!token) {
        setUser(null);
        return;
      }

      try {
        const response = await axios.get('/api/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        Cookies.remove('token');
        setUser(null);
      }
    };

    fetchUser();
  }, []); // Run only once on mount

  // Logout function
  const handleLogout = () => {
    Cookies.remove('token');
    setUser(null);
    router.refresh(); // Force page refresh to update UI
    router.push('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="KrishiSmart Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-green-600">KrishiSmart</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link href="/seasonal-crop-planner" className="text-gray-700 hover:text-green-600">Seasonal Crop Planner</Link>
            <Link href="/community" className="text-gray-700 hover:text-green-600">Community</Link>

            {user ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600">{user.username}</button>
                <div className="absolute hidden group-hover:block bg-white border rounded shadow-md">
                  <button onClick={handleLogout} className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full">Logout</button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
