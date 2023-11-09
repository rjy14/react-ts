import React from "react";
import "./CheckOut.css"; // Create a CSS file for styling
function CheckOut() {
  return (
    <div className="checkout-container">
      <div className="split bigger-left">
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
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
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
          </form>
        </div>
      </div>
      <div className="split smaller-right">
        <div className="centered-text">
          <h2>Enter Payment Details</h2>
          <br></br>
          <form className="payment-form">
            <div className="form-group">
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
                  type="number"
                  id="CardNo"
                  placeholder="Card Number"
                  required
                />
              </div>
              <div className="name-input">
                <input type="number" id="cvv" placeholder="CVV" required />
                <input type="text" id="Date" placeholder="Expiry Date" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CheckOut;
