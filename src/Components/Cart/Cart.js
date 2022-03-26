import React from 'react';
import DonorDetails from '../DonorDetails/DonorDetails';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {
    //console.log(props.carts)

    const { carts } = props;


    // total donation
    let total = 1;
    for (const price of carts) {

        total = total + price.donate;
    }

    return (
        <div>
            <div className="cart-area">
                <h3> <FontAwesomeIcon icon={faShoppingCart} />  Doner Price : {props.carts.length} </h3>
                <h5>Total Donation Price: $ {total}</h5>

            </div>

            {
                carts.map(cart => <DonorDetails key={cart.key} cart={cart}></DonorDetails>)
            }
        </div>
    );
};

export default Cart;