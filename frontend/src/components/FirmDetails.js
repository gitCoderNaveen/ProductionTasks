import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/firm.css'

function FirmDetails() {
    const [product, setProduct] = useState('');
    const [firmDetails, setFirmDetails] = useState([]);
    const [isPopup, setIsPopup] = useState(false)

    const fetchFirmDetails = async () => {
        try {
            const response = await fetch(`http://localhost:7001/datas/getFirmDetails?product=${product}`);
            const data = await response.json();
            if (response.ok) {
                setFirmDetails(data);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error fetching firm details:', error);
        }
        setIsPopup(true)
    };

    return (
        <div>
            <div className='container-fluid bg-dark-subtle mainDiv'>
                <div className='card bg-body-secondary my-card cardStyle'>
                    <div className='card-body my-card-body'>
                        <div className='form-floating my-form-div'>
                            <input
                                type="text"
                                value={product}
                                className="form-control my-form" id="floatingInput"
                                onChange={(e) => setProduct(e.target.value)}
                                placeholder="Enter product name"
                            />
                            <label>Enter Firm Name</label>
                        </div>
                        <div className='container'>
                        <button onClick={fetchFirmDetails} className='btn btn-primary btn-sm mt-2'>Get Firm Details</button>
                        {isPopup&&<button type='submit' onClick={(e)=>{setIsPopup(false)}} className='btn closeButton btn-danger btn-sm mt-2'>Exit</button>}
                        </div>
                    </div>
                </div>
                {isPopup && <div className='outPutDiv'>
                    {firmDetails.sort().length > 0 ? (
                        <div>
                            <h2 className='bg-success p-2 productHeading'>{product}</h2>
                            {firmDetails.map((firm, index) => (
                                <div>
                                    <ul key={index} className='list-group list-group'>
                                        <li className='list-group-item litst-items d-flex justify-content-between align-items-start'>
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">{firm.firmname}</div>
                                                {firm.doorno}, {firm.street}, {firm.area}, {firm.city}, {firm.pincode}
                                            </div>
                                            <span className="text-bg-primary rounded-pill p-2">{firm.mobile}</span>
                                        </li>
                                    </ul>
                                </div>))}
                        </div>) : <p></p>
                    }
                </div>}
            </div>
        </div>
    );
}

export default FirmDetails;
