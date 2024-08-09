import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/firm.css'

function FirmDetails() {
    const [product, setProduct] = useState('');
    const [firmDetails, setFirmDetails] = useState([]);

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
                                class="form-control my-form" id="floatingInput"
                                onChange={(e) => setProduct(e.target.value)}
                                placeholder="Enter product name"
                            />
                            <label for="floatingInput">Enter Firm Name</label>
                        </div>
                        <button onClick={fetchFirmDetails} className='btn btn-primary btn-sm mt-2'>Get Firm Details</button>
                    </div>
                </div>
                <div className='outPutDiv'>
                    {firmDetails.sort().length > 0 ? (
                        <div>
                            <h2 className='bg-success p-2 productHeading'>{product}</h2>
                            {firmDetails.map((firm, index) => (
                                <div>
                                    <ul key={index} className='list-group list-group'>
                                        <li className='list-group-item d-flex justify-content-between align-items-start'>
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">{firm.firmname}</div>
                                                {firm.doorno}, {firm.street}, {firm.area}, {firm.city}, {firm.pincode}
                                            </div>
                                            <span class="text-bg-primary rounded-pill p-2">{firm.mobile}</span>
                                        </li>
                                    </ul>
                                </div>))}
                        </div>) : <p>Firm not found for this product</p>}
                </div>
            </div>
        </div>
    );
}

export default FirmDetails;
