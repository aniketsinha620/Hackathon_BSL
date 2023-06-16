import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"

const LoginForm = ({ setIsLoggedIn }) => {
    const Nevigate = useNavigate();
    const [formData, setDataform] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShpwPassword] = useState(false);
    // hum isko false se initialise karege qkii start me password nahi dikhana hai isliyee

    function changeHandler(event) {
        setDataform((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        Nevigate("/");
    }


    return (
        

            <form onSubmit={submitHandler}
                className='flex flex-col w-full mt-1'>
                <label className=' w-full '>
                    <p className='text-[0.775rem]   text-richblack-5 mb-1 leading -[1.375] '>Email Address <sup className='text-pink-200'>*</sup> </p>
                    <input
                        required
                        type='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter your Email Address'
                        name="email"
                        className=' inputBox  rounded-[0.5rem]  w-full p-[8px] '
                    />
                </label>


                <label className='w-full relative mt-2'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375] ' >Password <sup className='text-pink-200'>*</sup> </p>
                    <input
                        required
                        //    iss tarah humne ek hi input field ko text ki tarah bhi dikha liya or password ki tarahh bhi
                        type={showPassword ? ("text") : ("password")}

                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        name="password"
                        className='inputBox rounded-[0.5rem]  w-full p-[12px] '
                    />
                    <span
                        className='absolute right-3 top-[38px] cursor-pointer '
                        onClick={() => setShpwPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible className='text-richblack-5 text-[24px] ' />) : (<AiOutlineEye className='text-white text-[24px]' />)}
                    </span>

                    <Link to="#">
                        <p className='text-xs  mt-1 text-blue-100 max-w-max ml-auto'>Forget password</p>
                    </Link>

                </label>

                <button className='sign rounded-[8px] font-medium  px-[12px] py-[8px] mt-6'>
                    Sign in
                </button>

            </form>
       
    )
}

export default LoginForm