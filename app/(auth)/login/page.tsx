import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const logIn = () => {
  return (
    <div className="text-white min-h-screen bg-gradient-to-b from-[#07152A] to-[#022533] flex items-center justify-center bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[url('/images/signup-bg.jpg')] bg-cover opacity-20"></div>
        <form className='relative z-10 bg-[#07152A]/10 backdrop-blur-md border border-[#00E3FF]/50 text-lightgrey p-8 rounded-2xl shadow-xl w-full max-w-md'>
            <h1 className='text-3xl font-bold text-center mb-6 '>Login</h1>
            <div className="input-box flex items-center bg-[#024061]/10 border border-[#00E3FF]/50 px-4 py-2 mb-4 rounded-lg">
                <input type="text" placeholder="Username" className='bg-transparent outline-none flex-1 placeholder-[#ADBECC]' required/>
                <PersonIcon className=''></PersonIcon>
            </div>
            <div className="input-box input-box flex items-center bg-[#024061]/10 border border-[#00E3FF]/50 px-4 py-2 mb-4 rounded-lg">
                <input type="password" placeholder="Password" className='bg-transparent outline-none flex-1 placeholder-[#ADBECC]' required/>
                <VisibilityOffIcon className=''></VisibilityOffIcon>
                <VisibilityIcon className=''></VisibilityIcon>
            </div>

            <div className="remember-forgot flex justify-between text-sm mb-4">
                <label className='flex items-center space-x-2'><input type="checkbox" className='accent-[#00E3FF]/30'/> <span>Remember me</span> </label>
                <a href="#" className='hover:underline'>Forgot password?</a>
            </div>

            <button type='submit' className="btn w-full bg-[#00E3FF]/50 hover:bg-[#00E3FF]/30 transition-all text-white font-bold py-2 rounded-full">Login</button>

            <div className="register-link">
                <p className='text-center text-sm mt-4'>Don&apos;t have an account? <a href="#" className='text-[#00E3FF]/70 hover:underline'>Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default logIn