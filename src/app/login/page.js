// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import axios from 'axios'
// import { Eye, EyeOff } from "lucide-react";

// const Login = () => {
//   const router = useRouter();
//     const [showPassword, setShowPassword] = useState(false);

    
//         const [user, setUser] = React.useState({
//             email:"",
//             password: ""
//         })
    
//         const onLogin = async (e)=>{
//           e.preventDefault(); 
            
//         }
//   return (<>

// <div className="flex h-screen items-center justify-center bg-gray-100">
//       <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="w-1/2 bg-amber-50 flex flex-col items-center justify-center p-8">
//           <img
//             src="/login.png"
//             alt="KrishiMART Logo"
//             className="mb-4"
//           />
//           <h2 className="text-xl font-semibold text-green-800">Simplifying Agriculture for Every Kisan</h2>
//         </div>
//         <div className="w-1/2 p-8">
//           <h2 className="text-2xl font-bold text-green-700 mb-2">WELCOME TO KRISHIMART</h2>
//           <p className="text-gray-600 mb-6">Login to your Account</p>
//           <form>

            
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="johndoe@example.com"
//               className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"

//               value={user.email}
//               onChange={(e)=>setUser({...user, email: e.target.value})}
//             />


//             <label htmlFor='password' className="block text-gray-700">Password</label>
//             <div className="relative">

//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter your Password"
//               className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"

//               value={user.password}
//               onChange={(e)=>setUser({...user, password: e.target.value})}
//               />
//                <button
//                 type="button"
//                 className="cursor-pointer absolute right-3 top-3 text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
                
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//               </div>


//             <div className="flex items-center justify-between mt-4">
//               <label className="flex items-center text-gray-600">
//                 <input type="checkbox" className="cursor-pointer mr-2" /> Remember Me
//               </label>
//               <a href="#" className="text-green-600 hover:underline">
//                 Forgot password?
//               </a>
//             </div>
//             <button
//                 onClick={onLogin}
//               type="submit"
//               className="cursor-pointer w-full mt-6 bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
//             >
//               Signup
//             </button>
//           </form>
//           <Link href="/signup" className="block mt-4 text-green-600 hover:underline">
//            New User? Singup
//           </Link>
//         </div>
//       </div>
//     </div>

// </>
//   )
// }

// export default Login

'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  // Enable/disable button based on whether fields are filled
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login success:", response.data);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 bg-amber-50 flex flex-col items-center justify-center p-8">
          <img src="/login.png" alt="KrishiSmart Logo" className="mb-4" />
          <h2 className="text-xl font-semibold text-green-800">Simplifying Agriculture for Every Kisan</h2>
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Welcome to KrishiSmart</h2>
          <p className="text-gray-600 mb-6">Login to your Account</p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={onLogin}>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <label htmlFor="password" className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <button
                type="button"
                className="cursor-pointer absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="cursor-pointer mr-2" /> Remember Me
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              disabled={buttonDisabled || loading}
              className={`cursor-pointer w-full mt-6 bg-green-700 text-white py-2 rounded-md transition ${
                buttonDisabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <Link href="/signup" className="block mt-4 text-green-600 hover:underline">
            New User? Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;