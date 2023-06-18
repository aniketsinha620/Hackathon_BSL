import React from 'react'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
import Piachart from '../../components/Piachart'
import Areachat from '../../components/Areachat'

const Expense = () => {
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
                             <Areachat/>
                        </div>

                    </div>
                    <div className='rightdiv-dashboard'>
                        <div className='dashboardmap'>
                            <Piachart />
                        </div>
                        <div className='dashboardmap'>
                            <Piachart />
                        </div>


                        <img className='btillustrator' src={btillustrator} alt="sitting"


                        />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Expense