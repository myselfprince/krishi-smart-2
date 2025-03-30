'use client'
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await axios.get('/api/users/logout');
      console.log(response.data.message);
      router.push('/login'); // Redirect to login page after logout
      // Optionally, clear any user-related state here
      // For example, if you are using a global state management library like Redux or Context API,
      // you can dispatch an action to clear the user state.
      // Or if you are using local state, you can set the user state to null.
      // setUser(null);
      // Optionally, redirect or update state here
    } catch (error) {
      console.error('app/profile/page.js Logout failed:', error);
    }
  };
  return (
    <div>
      Profile page to test logout functionality

      <h1>Profile</h1>

      <hr />
      <button
      onClick={logout}
      className='w-[500px] bg-green-600 height-[100px]'>Logout</button>
    </div>
  )
}

export default Profile