import React, { useState } from "react";
import "./CheckOut.css"; // Create a CSS file for styling
function CheckOut() {
  const [cardNumber, setCardNumber] = useState('');
  const handleCardNumberChange = (e: { target: { value: string; }; }) => {
    const input = e.target.value.replace(/\D/g, '');
    const formattedInput = input.replace(/(\d{4})/g, '$1 ').trim(); // Add space after every 4 numbers
    setCardNumber(formattedInput);
  };
  return (
    <div className="checkout-container">
        <div className="centered-text">
          <h2>Shipping Details</h2>
          <br></br>
          <form className="shipping-form">
            <div className="form-group">
              <div className="name-input">
                <input
                  type="text"
                  id="Firstname"
                  name="Firstname"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  id="Lastname"
                  name="Lastname"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <select id="country" name="country">
                <option value="" disabled selected>
                  Select Country
                </option>
                <option value="USA">United States</option>
                <option value="VN">Vietnam</option>
                <option value="IND">Indonesia</option>
                <option value="KOR">South Korea</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="street"
                name="street"
                placeholder="Street Name"
              />
            </div>
            <div className="form-group">
              <input type="text" id="City" name="City" placeholder="City" />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="Address"
                name="Address"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
              />
            </div>
            <h2>Enter Payment Details</h2>
          <br></br>
        
              <div className="form-group">
                <input
                  type="text"
                  id="FullName"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
      <input
        type="text"
        id="CardNo"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleCardNumberChange}
        required
      />
    </div>
              <div className="name-input">
                <input type="number" id="cvv" placeholder="CVV" required />
                <input type="text" id="Date" placeholder="Expiry Date" />
              </div> 
          </form>
        </div>
   </div>
       
  );
}
export default CheckOut;
