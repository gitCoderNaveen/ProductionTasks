import React, { useState } from 'react';

function FirmDetails() {
    const [product, setProduct] = useState('');
    const [firmDetails, setFirmDetails] = useState(null);

    const fetchFirmDetails = async () => {
        try {
            const response = await fetch(`/getFirmDetails?product=${product}`);
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
            <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Enter product name"
            />
            <button onClick={fetchFirmDetails}>Get Firm Details</button>

            {firmDetails && (
                <div>
                    <h3>Firm Name: {firmDetails.firmName}</h3>
                    <p>Door No: {firmDetails.doorNo || 'N/A'}</p>
                </div>
            )}
        </div>
    );
}

export default FirmDetails;
