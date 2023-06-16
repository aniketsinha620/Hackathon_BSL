import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import logoImage from "../assets/Rectangle 51.png"



// common part ko bahar nikaal diya hai jo ki signUp and login me tha 
const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn, subtitle }) => {
    return (
        <div className=' flex  justify-evenly  py-10  mt-6   gap-y-0 h-[620px]'>

            <div className='loginform w-11/12 max-w-[420px]  ml-20 mr-20 '>

                <div className='flex  gap-2 justify-center'>
                    <Link to='/'>
                    <img src={logoImage} alt="logo " width={65} height={32} loading='lazy' />
                    </Link>
                    <h1 className=' title  font-semibold   '>{title}</h1>
                </div>
                <h1 className='subtitle '>{subtitle}</h1>
                <p className='text-[0.6rem] leading-[1.625] mt- '>
                    <span className='text-richblack-100' > {desc1}</span>
                    <br />
                    <span className='text-blue-100 italic'> {desc2}</span>
                </p>
                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div className='flex w-full items-center my-4 gap-x-2 '>
                    <div className='w-full h-[1px] bg-richblack-700 '></div>
                    <p className='text-richblack-700 font-medium leading-[1.73rem]' >OR</p>
                    <div className='w-full h-[1px]  bg-richblack-700 ' ></div>
                </div>


                
                    <ul>
                    
                            <NavLink className='text-blue-200 ' to="/signup">
                                
                              <li className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
                               border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0' >
                                Signup
                              </li>
                            </NavLink>
            
                    </ul>

            

            </div>


            <div className=' logindiv  relative w-11/12 max-w-[850px]   ml-10 mr-20  '>

                <img src={image} alt="Students"
                    widht={558}
                    height={490}
                    loading='lazy'
                    className="absolute -top-4 right-4 "
                />
            </div>



        </div>
    )
}

export default Template