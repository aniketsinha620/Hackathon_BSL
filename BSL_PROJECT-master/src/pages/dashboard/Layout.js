import React from 'react'
// import Dashboardform from './Dashboardform'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
import Dashboardform from "../../pages/dashboard/Dashboardform"

export const Layout = () => {
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
                        <Dashboardform/>
                    </div>  
                    <div className='rightdiv-dashboard'>
                        <div className='dashboardmap'>

                        </div>
                        <div className='runningbus'>

                        </div>
                        <div className='runningbus'>

                        </div>

                        <img className='btillustrator' src={btillustrator} alt="sitting"


                        />
                    </div>

                </div>
            </div>
        </div>
  )
}
