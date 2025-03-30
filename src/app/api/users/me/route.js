import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import Link from 'next/link';
import axios from 'axios';

connect();

export async function GET(request) {
  try {
    const token = request.cookies.get('token')?.value; // Read token from cookies
    console.log('Token from cookies:', token); // Debug: Log the token
    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log('Decoded token:', decoded); // Debug: Log the decoded token
    const user = await User.findById(decoded.id).select('-password'); // Exclude password
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    console.error('Error verifying token:', error);
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}

export function UserMenu({ user, handleLogout }) {
  return (
    user ? (
      <div className="relative group">
        <button className="text-gray-700 hover:text-green-600">{user.username}</button>
        <div className="absolute hidden group-hover:block bg-white border rounded shadow-md">
          <button onClick={handleLogout} className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full">Logout</button>
        </div>
      </div>
    ) : (
      <Link href="/login" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Login</Link>
    )
  );
}

export const fetchUser = async () => {
  try {
    const response = await axios.get('/api/users/me', {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    setUser(response.data.user);
  } catch (error) {
    console.error('Failed to fetch user:', error);
    setUser(null);
  }
};

export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};