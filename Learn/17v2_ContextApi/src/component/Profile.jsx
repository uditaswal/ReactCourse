import React,{useContext} from 'react'
import UserContext from '../context/UserContext.'


function Profile() {
    const { user } = useContext(UserContext);

 if (!user) return (
    
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
      <h3 className="text-5xl font-bold mb-4">Please Login</h3>
    </div>
  </div>

  )
  return (
    <div className="flex items-center justify-center h-1/3 mt=0 bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
      <h3 className="text-5xl font-bold mb-4">Welcome, {user.username}!</h3>
      <p className="text-gray-700">You are now logged in.</p>
    </div>
  </div>)
}



export default Profile