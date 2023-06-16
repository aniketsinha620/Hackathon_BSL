import React from 'react'
import './dashboard.css'
import sittingillustrator from "../assets/pana.svg"
import btillustrator from "../assets/rafiki.svg"

const DashBoad = () => {
    return (
        <div className=' dashboard flex justify-center items-center  text-white text-3xl h-full' >
            <div className='background-dashboard'>
                <div className='maindiv'>
                    <div className='leftdiv-dashboard'>

                        <div className='Heading-dashboard'>Dashboard</div>
                        
                        <div className='illustrator-bgtop'></div>
                        
                        <img src={sittingillustrator} alt="sitting"

                            className="sittingillustrator "
                        />
                        <div className='dashboardForm'>
                          
                        </div>
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

export default DashBoad;