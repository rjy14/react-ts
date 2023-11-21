import React, { FormEvent, useState } from "react";
import { useMulti } from "../../components/StepperForm/UseMulti";
import { PaymentForm } from "../../components/StepperForm/Payment";
import ShippingForm from "../../components/StepperForm/Shipping";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";

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