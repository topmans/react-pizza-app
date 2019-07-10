import React from 'react';
import { Link } from "react-router-dom";

const OrderConfirm = ({Total, ConfirmOrder, UserName, Address, setUserName, setAddress}) => {
    var disabled = true;
    if(UserName !== '' && Address !== '' && UserName.length > 2 && Address.length > 3) disabled = false;
    return (
        <div className="Order">
            <h3>Enter some details to complete the order.</h3>
            <input type="text" className="User-name" value={UserName} placeholder="Enter your name" required onChange={e => setUserName(e.target.value)}/>
            <input type="text" className="User-address" value={Address} placeholder="Address" required onChange={e => setAddress(e.target.value)}/>
            <p className="Amount">Total amount: ${Total}</p>
            <Link to="/thanks" onClick={ () => ConfirmOrder()}><button type="submit" disabled={disabled} className="Confirm-order Green-btn">Confirm order</button></Link><br/>
            <Link to="/">Back</Link>
        </div>
    )
};

export default OrderConfirm;
