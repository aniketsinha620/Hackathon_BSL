import React from 'react'
import "./Service.css"
import EventSeatSharpIcon from '@mui/icons-material/EventSeatSharp';
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
import Seat_booking from './Seat_booking';
import Map from './map/Map';


export default function Booking(props) {
    const [map, setMap] = React.useState(true)
    const handleClick = () => {
        setMap(prev => !prev)
    }


    return (

        <>
            <h1 className='booking_heading'>{props.busname}</h1>
            <div className='booking_main'>
                <div className="booking">
                    <div className="bookingbus-detail">
                        {props.place == "outside" ?
                            <div className="bookingbusimg">
                                <img src="/bus1.jpg" alt="" />
                            </div> :
                            <div className="bookingbusimg">
                                <img src="/car3.jpg" alt="" />
                            </div>}

                        <h2>{props.busname}</h2>
                        {/* <h2>ATT TRAVELS</h2> */}




                        <div className="bookingbusdetail">
                            <div className="path">
                                <img src="ic_route.svg" alt="" />
                                <div className="route">
                                    <p className='from-route'>{`FROM:-${props.source}`}</p>
                                    <p>{`TO:-${props.destination}`}</p>
                                </div>
                            </div>
                            <div className="busno">
                                {props.place == "outside" ?
                                    <p>BUS NO<h3>JH-09-AM1981</h3></p> :
                                    <p>CAR NO<h3>TN-07-CX4416</h3></p>}


                            </div>
                            <div className="status">
                                <p>STATUS:- <h3>NOT RUNNING</h3> </p>

                            </div>
                            <div className="contactno">
                                <p>CONTACT NO:- <h3>8340283015</h3></p>
                            </div>
                        </div>
                        {props.place == "outside" ? <button className='btn-booking' onClick={() => handleClick()}><p>{map ? "VIEW MAP" : " SEAT MATRIX"}</p><p className='booking-icon'><KeyboardDoubleArrowDownSharpIcon /></p></button> :
                            <button className='btn-booking' onClick={() => alert("YOUR RIDE IS BOOKED")}>BOOK NOW  <p className='booking-icon'><KeyboardDoubleArrowDownSharpIcon /></p></button>}

                    </div>



                </div>
                {props.place === "outside" ?
                 <> {map ? <div className='seat-matrix'><Seat_booking /> </div> :
                    <div className='map-matrix'>
                        <Map scordinate={props.scordinate} dcordinate={props.dcordinate} />
                    </div>}</> :
                     <div className='map-matrix'><Map scordinate={props.scordinate} dcordinate={props.dcordinate} 
                     place={props.place}/></div>}



            </div></>
    )
}
