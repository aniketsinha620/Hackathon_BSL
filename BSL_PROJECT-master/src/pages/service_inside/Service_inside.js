import React, { useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../service/Service.css";
import Card from '../service/Card';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import Card_bus from '../service/Card_bus';
import servieceimage from '../../homeassets/service123.svg'
import Footer from '../Footer';
const places = [
    {
        name: 'ALKUSAA GATE',
        latitude: 23.6789,
        longitude: 86.1517
    },
    {
        name: 'RMHS GATE',
        latitude: 23.6612,
        longitude: 86.1484
    },
    {
        name: 'RMHS GATE',
        latitude: 23.6606,
        longitude: 86.1483
    },
    {
        name: 'BANDHDIH YARD',
        latitude: 23.6765,
        longitude: 86.1234
    },
    {
        name: 'LOHANCHAL',
        latitude: 23.6889,
        longitude: 86.1612
    },
    {
        name: 'RAILWAY SIDING',
        latitude: 23.6701,
        longitude: 86.1345
    },
    {
        name: '4 LANE',
        latitude: 23.6812,
        longitude: 86.1423
    },
    // Add more places in Bokaro as needed
];

export default function Services_inside() {
    const provider = new OpenStreetMapProvider();
    const [searchResults, setSearchResults] = useState([]);
    const [source, setSource] = useState([]);
    const [destination, setDestination] = useState([]);
    const [card, setCard] = useState(true);
    const SourceRef = useRef(null);
    const DestinationRef = useRef(null);

    // const handleClick = async (e) => {
    //   e.preventDefault(); // Prevent form submission and page refresh

    //   if (SourceRef.current.value.trim() === '' || DestinationRef.current.value.trim() === '') {
    //     alert("Enter the Source and Destination");
    //     return;
    //   }

    //   setCard(false);
    //   console.log(SourceRef.current.value, DestinationRef.current.value);

    //   const results = await provider.search({ query: SourceRef.current.value });
    //   const cityResults = await provider.search({ query: DestinationRef.current.value });

    //   if (results.length > 0 && cityResults.length > 0) {
    //     setSearchResults(results);
    //     const newX = results[0].x;
    //     const newY = results[0].y;
    //     setSource([...source, newX, newY]);
    //     console.log(source);

    //     const cityX = cityResults[0].x;
    //     const cityY = cityResults[0].y;
    //     setDestination([...destination, cityX, cityY]);
    //     console.log(destination);
    //   } else {
    //     console.log("No results found.");
    //   }

    //   return false;
    // };

    const handleClick = async (e) => {
        e.preventDefault(); // Prevent form submission and page refresh

        if (SourceRef.current.value.trim() === '' || DestinationRef.current.value.trim() === '') {
            alert("Enter the Source and Destination");
            return;
        }

        setCard(false);
        console.log(SourceRef.current.value, DestinationRef.current.value);

        const sourceName = SourceRef.current.value.trim();
        const destinationName = DestinationRef.current.value.trim();

        const sourcePlace = places.find(place => place.name === sourceName);
        const destinationPlace = places.find(place => place.name === destinationName);

        if (sourcePlace) {
            const sourceLatitude = sourcePlace.latitude;
            const sourceLongitude = sourcePlace.longitude;
            setSource([sourceLatitude, sourceLongitude]);
            console.log(source);
        } else {
            const results = await provider.search({ query: SourceRef.current.value });
            if (results.length > 0) {
                setSearchResults(results);
                const newX = results[0].x;
                const newY = results[0].y;
                setSource([newX, newY]);
                console.log(source);
            } else {
                console.log("No results found for source.");
            }
        }

        if (destinationPlace) {
            const destinationLatitude = destinationPlace.latitude;
            const destinationLongitude = destinationPlace.longitude;
            setDestination([destinationLatitude, destinationLongitude]);
            console.log(destination);
        } else {
            const cityResults = await provider.search({ query: DestinationRef.current.value });
            if (cityResults.length > 0) {
                setSearchResults(cityResults);
                const cityX = cityResults[0].x;
                const cityY = cityResults[0].y;
                setDestination([cityX, cityY]);
                console.log(destination);
            } else {
                console.log("No results found for destination.");
            }
        }

        return false;
    };


    const handleChange = () => {
        console.log("hello");
    };

    return (



        <div className='service'>

            <div className="service-top">
                <div className="illustrator-service">
                    {/* <img src="service.svg" alt="" /> */}
                    <img src={servieceimage} alt="Students"
                        widht={558}
                        height={490}
                        loading='lazy'
                    // className='ourcclientimage'
                    />
                </div>

                <div className="form-service">
                    <form>
                        <label htmlFor="from" className='from'>From</label>
                        <br />
                        <input
                            type="text"
                            id='from'
                            ref={SourceRef}
                            placeholder='Enter the Source' />
                        <br />
                        <label htmlFor="to">To</label>
                        <br />
                        <input
                            type="text"
                            id='to'
                            ref={DestinationRef}
                            placeholder='Enter the Destination' />
                        <br />
                        <button onClick={handleClick}>Search  <SearchIcon /></button>
                    </form>
                </div>
            </div>

            <section>
                {card === true ?
                    <div className='bus-card'>
                        <h1 className='headingservice'>Our Vehicles</h1>
                        <Card  place="inside" />
                    </div> :
                    <div className='Card_bus-service'>
                        <div>
                            <Card_bus source={SourceRef.current.value} destination={DestinationRef.current.value}
                                scordinate={source} dcordinate={destination}  place="inside"/>
                        </div>
                    </div>}
            </section>
            <Footer />
        </div>
    );
}
