import { React, useRef, useState, useEffect } from 'react'
import { OpenStreetMapProvider } from "leaflet-geosearch"
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, Tooltip } from 'react-leaflet';
import MyMarker from './myMarker';
import Weather from './Weather';

function Map() {

    const inputRef = useRef()
    const [position, setPosition] = useState([32.05554848672824, 34.80284137736907])
    const [freeCoose, setFreeCoose] = useState("london");
    const [searchTrigger, setSearchTrigger] = useState(false);
    const mapProvider = new OpenStreetMapProvider();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const locationSearch = async () => {
        let inputValue = inputRef.current.value;
        let cities = await
            mapProvider.search({ query: inputValue });
        console.log(cities);
        if (cities.length > 0)
            setPosition([cities[0].y, cities[0].x])
    }

    useEffect(() => {
        if (searchTrigger) {
            locationSearch()
            setSearchTrigger(false);
        }
    }, [searchTrigger])

    useEffect(() => {
        setSearchTrigger(true);
    }, [freeCoose])



    return (
        <>

            <Weather setFreeCoose={setFreeCoose}/>

            <div className='d-flex justify-content-center align-items-center mb-5'>
                <MapContainer center={position} zoom={13} style={{
                    width: '500px', height: '225px', border: '0', borderRadius: '15px', border: 'red',
                }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <MyMarker position={position}>
                        <Popup>
                            Grade 100% for my project!
                        </Popup>
                        <Tooltip>Ort singalovski </Tooltip>
                    </MyMarker>
                </MapContainer>
            </div>

            <form onSubmit={handleSubmit} className='text-center d-flex justify-content-center my-2'>
                <select ref={inputRef} name="" id=""
                    onChange={locationSearch} className='mx-2 form-control w-25 border-danger text-danger'>
                    <option value={freeCoose}>חפש...</option>
                    <option value="אורט">אורט סינגאלובסקי תל אביב</option>
                    <option value="אורט בראודה">אורט בראודה כרמיאל</option>
                    <option value="אורט רחובות">אורט רחובות</option>
                </select >
                <button type='submit' className='btn btn-danger'>Options</button>
            </form >
        </>
    )
}

export default Map