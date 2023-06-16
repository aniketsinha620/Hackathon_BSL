import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
    const nevigate = useNavigate();
    const [formData, setDataform] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");


    function changehandler(event) {
        setDataform((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }))
    }
    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password do not match ");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData,
            accountType
        }
        console.log("Printing Final account Data ");
        console.log(finalData);
        nevigate("./dashboard")
    }

    return (
        <div>
            {/*  Student-Instructor tab*/}
            <div
                className='flex role p-1 gap-x-1 rounded-full max-w-max'
            >
                <button
                    className={`${accountType === "Workers"
                        ?
                        " bg-richblack-2 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-200 `}

                    onClick={() => setAccountType("Workers")}
                >
                    Workers
                </button>




                <button
                    className={`${accountType === "Driver"
                        ?
                        " bg-richblack-2 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-200 `}

                    onClick={() => setAccountType("Driver")
                    }
                >
                    Driver
                </button>
                <button
                    className={`${accountType === "Admin"
                        ?
                        " bg-richblack-2 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-200 `}

                    onClick={() => setAccountType("Admin")
                    }
                >
                    Admin
                </button>
            </div>







            <form onSubmit={submitHandler}>
                {/*first name and lastName  */}
                <div className='flex justify-between w-full mt' >
                    <label className='mt-4 mr-4'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375] '>First Name <sup className='text-pink-200' >*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            placeholder='Enter first Name:'
                            onChange={changehandler}
                            value={formData.firstname}
                            className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                        />

                    </label>


                    <label className='mt-4'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >last Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            placeholder='Enter last Name:'
                            onChange={changehandler}
                            value={formData.lastname}
                            className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                        />
                    </label>

                </div>
                {/* Email Add */}
                <label className='w-full mt-4'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375] mt-4 ' >Email Address <sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder='Enter Email Address:'
                        onChange={changehandler}
                        value={formData.email}
                        className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                    />
                </label>

                {/* createPassword and confirm password */}
                <div className='flex justify-between w-full'>
                    <label className='relative mt-4 mr-4'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]'>Create Password <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            placeholder='Enter Password'
                            onChange={changehandler}
                            value={formData.password}
                            className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                        />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer '
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible className='text-white text-[24px] ' />) : (<AiOutlineEye className='text-white text-[24px]' />)}
                        </span>
                    </label>



                    <label className=' relative mt-4'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >Confirm Password <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            placeholder='Confirm Password'
                            onChange={changehandler}
                            value={formData.confirmPassword}
                            className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                        />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer '
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible className='text-white text-[24px] ' />) : (<AiOutlineEye className='text-white text-[24px] ' />)}
                        </span>
                    </label>
                </div>
                <button className='sign w-full  rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default SignupForm