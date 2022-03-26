import React from 'react';
import "./DonorDetails.css"

const DonorDetails = (props) => {
    console.log(props.cart)
    const { name, alias, img, donate } = props.cart

    return (
        <div>
            <div className="donor-details d-flex ">
                <img className="cart-img" src={img} alt="" />
                <div className="ms-2">
                    <h6 > {alias}({name})</h6>
                    <p>Donated:{donate}</p>
                </div>
            </div>
        </div>
    );
};

export default DonorDetails;