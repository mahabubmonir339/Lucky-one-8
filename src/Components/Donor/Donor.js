import React from 'react';
import "./Donar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Donor = (props) => {
  const { name, age, img, height, donate, quirk, alias } = props.donor

  //  donor details in cart 
  return (
    <div className='p-2 '>
      <div className="col  ">
        <div className="card h-100 cart-details">
          <div className='img-area'>
            <img src={img} className="card-img-top donor-img" alt="..." />
          </div>

          <div className="card-body">
            <h5>{alias}</h5>
            <h6>Name : {name}</h6>
            <h6>Quirk : {quirk}</h6>
            <h6>Age: {age}</h6>
            <h6>Height: {height}</h6>
            <h6>Donation : $ {donate}</h6>

            <button onClick={() => props.countDonor(props.donor)} className="btn btn-danger"> <i className="fas fa-donate btn-icon"></i> <FontAwesomeIcon icon={faShoppingCart} /> Donate</button>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Donor;