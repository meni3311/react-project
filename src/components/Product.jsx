import { React, useState } from 'react'

function Product(props) {

    const [showDetails, setShowDetails] = useState(false);

    const handleMouseOver = () => {
        setShowDetails(true);
    };

    const handleMouseOut = () => {
        setShowDetails(false);
    };

    return (
            <div style={{ backgroundColor: 'rgb(229, 48, 72)' }} className="col-lg-3 col-md-5 mb-4 product m-2 py-3 px-3"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                    <img alt={props.name} src={props.image_url} className="w-100" />
                    {showDetails && (
                        <div className="overlay">
                            <div className="details">
                                <h3>{props.name}</h3>
                                <p>{props.ingredients}</p>
                                {/* Add more details here */}
                            </div>
                        </div>
                    )}
                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                            <div className="d-flex justify-content-start align-items-start h-100">
                                <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">{props.price}</span></h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
    )
}

export default Product