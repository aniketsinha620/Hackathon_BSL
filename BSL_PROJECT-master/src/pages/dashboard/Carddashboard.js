import React from 'react'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
import Barchat from '../../components/Barchat'
import Piachart from '../../components/Piachart'

const Carddashboard = () => {
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
                <div className='cardcollection'>

                </div>
                <div className='cardcollect'>
                   <Barchat className='chatcss' />
                </div>
            </div>  
            <div className='rightdiv-dashboard'>
                <div className='dashboardmap'>
                  <Piachart/>
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

export default Carddashboard