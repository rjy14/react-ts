import React, { FormEvent, useState } from "react";
import { useMulti } from "../../components/StepperForm/useMulti";
import { PaymentForm } from "../../components/StepperForm/Payment";
import ShippingForm from "../../components/StepperForm/Shipping";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";
// import "./CheckOut.css";
// function CheckOut() {
//   const [cardNumber, setCardNumber] = useState("");
//   const handleCardNumberChange = (e: { target: { value: string } }) => {
//     const input = e.target.value.replace(/\D/g, "");
//     const formattedInput = input.replace(/(\d{4})/g, "$1 ").trim(); // Add space after every 4 numbers
//     setCardNumber(formattedInput);
//   };
//   return (
//     <div className="checkout-container">
//       <div className="centered-text">
//         <h2>Shipping Details</h2>
//         <br></br>
//         <form className="shipping-form">
//           <div className="form-group">
//             <div className="name-input">
//               <input
//                 type="text"
//                 id="Firstname"
//                 name="Firstname"
//                 placeholder="First Name"
//               />
//               <input
//                 type="text"
//                 id="Lastname"
//                 name="Lastname"
//                 placeholder="Last Name"
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <input
//               type="number"
//               id="phoneNumber"
//               name="phoneNumber"
//               placeholder="Phone Number"
//             />
//           </div>
//           <div className="form-group">
//             <input type="text" id="Email" name="Email" placeholder="Email" />
//           </div>
//           <div className="form-group">
//             <select id="country" name="country">
//               <option value="" disabled selected>
//                 Select Country
//               </option>
//               <option value="USA">United States</option>
//               <option value="VN">Vietnam</option>
//               <option value="IND">Indonesia</option>
//               <option value="KOR">South Korea</option>
//               {/* Add more countries as needed */}
//             </select>
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               id="street"
//               name="street"
//               placeholder="Street Name"
//             />
//           </div>
//           <div className="form-group">
//             <input type="text" id="City" name="City" placeholder="City" />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               id="Address"
//               name="Address"
//               placeholder="Address"
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               id="postalCode"
//               name="postalCode"
//               placeholder="Postal Code"
//             />
//           </div>
//           <h2>Enter Payment Details</h2>
//           <br></br>

//           <div className="form-group">
//             <input type="text" id="FullName" placeholder="Full Name" required />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               id="CardNo"
//               placeholder="Card Number"
//               value={cardNumber}
//               onChange={handleCardNumberChange}
//               required
//             />
//           </div>
//           <div className="name-input">
//             <input type="number" id="cvv" placeholder="CVV" required />
//             <input type="text" id="Date" placeholder="Expiry Date" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
type FormData = {
  //typescript
  Firstname: string;
  Lastname: string;
  Phonenumber: string;
  Email: string;
  Street: string;
  City: string;
  Address: string;
  Postalcode: string;
  Fullname: string;
  Cardnumber: string;
  CVV: string;
  Expirydate: string;
};

const INITIAL_DATA: FormData = {
  //typescript
  Firstname: "",
  Lastname: "",
  Phonenumber: "",
  Email: "",
  Street: "",
  City: "",
  Address: "",
  Postalcode: "",
  Fullname: "",
  Cardnumber: "",
  CVV: "",
  Expirydate: "",
};

function CheckOut() {
  const { removeAll } = useShoppingCart();
  const navigate = useNavigate();
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMulti([
      <ShippingForm {...data} updateFields={updateFields} />,
      <PaymentForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Payment successful! Thank you for shopping with HighFashion!");
    removeAll();
    navigate("/home");
  }
  
  return (
    <>
      <h1>HighFashion</h1>
      <br></br>
      <center>
        <div
          style={{
            position: "relative",
            background: "white",
            border: "1px solid black",
            padding: "2rem",
            margin: "1rem",
            borderRadius: ".5rem",
            fontFamily: "Arial",
            maxWidth: "max-content",
          }}
        >
          <form onSubmit={onSubmit}>
            <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
              {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: ".5rem",
                justifyContent: "flex-end",
              }}
            >
              {!isFirstStep && (
                <button type="button" onClick={back}>
                  Back
                </button>
              )}
              <button type="submit">
                {isLastStep ? "Pay" : "Proceed to payment"}
              </button>
            </div>
          </form>
        </div>
      </center>
      <div></div>
    </>
  );
}
export default CheckOut;