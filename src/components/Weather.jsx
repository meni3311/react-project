import React, { useEffect, useState } from 'react'


const Weather = (props) => {

    const apiKey = '579664901d0e779e6ba0de72e5cb0278';
    const [city, setCity] = useState('London');
    const [description, setDescription] = useState("");
    const [temp, setTemp] = useState(0.0);
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    const fetchingData = () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle and display weather data
                console.log(data);
                setDescription(data.weather[0].description);
                setTemp(data.main.temp)
            })
            .catch(error => {
                // Handle API request errors
                console.error('Error fetching weatherdata: ', error);
            });
    }

    useEffect(() => fetchingData(), []);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchingData();
        props.setFreeCoose(city);
    }


    return (
        <>
            <main className="container-fluid">
                <div className="container ">
                    <form onSubmit={handleSubmit}
                        className='d-flex m-auto justify-content-center my-4' >
                        <input onChange={(e) =>
                            setCity(e.target.value)} type="text"
                            className='form-control w-25 me-2 border-danger text-danger' />
                        <button type='submit'
                            className='btn btn-danger'>Search</button>
                    </form>
                    <div className='text-center w-50 border
border-2 border-danger m-auto rounded-2 my-4'>
                        <h2>Temp: <span
                            className='text-danger'> {temp} °C</span></h2>
                        <h2>Description: <span
                            className='text-danger'>{description}</span> </h2>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Weather