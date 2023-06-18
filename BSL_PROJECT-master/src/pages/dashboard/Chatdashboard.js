import React from 'react'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"

const Chatdashboard = () => {
  return (
    <div className=' dashboard flex justify-center items-center  bg-richblack-2 text-3xl h-full ' >
    <div className='background-dashboard'>
        <div className='maindiv'>
            <div className='leftdiv-dashboard'>

                <div className='Heading-dashboard'>Dashboard</div>

                <div className='illustrator-bgtop'></div>

                <img src={sittingillustrator} alt="sitting"

                    className="sittingillustrator "
                />
                
            </div>  
           

        </div>
    </div>
</div>
  )
}

export default Chatdashboard