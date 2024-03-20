import React from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'

const MyMarker = (props) => {

    const map = useMap();
    map.flyTo(props.position);

    return (
        <Marker position={props.position}>
            <Popup>
                <a target='_blank'
                    className='text-decoration-none fw-bold'
                    href="https://c.ort.org.il/singalovski-telaviv/">Ort Singalovski
                </a>
            </Popup>
        </Marker>
    )
}
export default MyMarker