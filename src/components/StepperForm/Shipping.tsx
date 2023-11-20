import FormWrapper  from "./FormWrapper";
type ShippingData = {
  Firstname: string;
  Lastname: string;
  Phonenumber: string;
  Email: string;
  Street: string;
  City: string;
  Address: string;
  Postalcode: string;
  //Country: string
};

type ShippingFormProps = ShippingData & {
  updateFields: (fields: Partial<ShippingData>) => void;
};

function ShippingForm({
  Firstname,
  Lastname,
  Phonenumber,
  Email,
  Street,
  City,
  Address,
  Postalcode,
  updateFields,
}: ShippingFormProps)
 {
  return (
    <FormWrapper title="Shipping Details">
      <input
        autoFocus
        required
        type="text"
        value={Firstname}
        placeholder="Firstname"
        onChange={(e) => updateFields({ Firstname: e.target.value })}
      />
      <input
        required
        type="text"
        value={Lastname}
        placeholder="Lastname"
        onChange={(e) => updateFields({ Lastname: e.target.value })}
      />
      <input
        required
        type="number"
        value={Phonenumber}
        placeholder="Phone Number"
        onChange={(e) => updateFields({ Phonenumber: e.target.value })}
      />

      <input
        required
        type="text"
        value={Email}
        placeholder="Email"
        onChange={(e) => updateFields({ Email: e.target.value })}
      />
      <input
        required
        type="text"
        value={Street}
        placeholder="Street"
        onChange={(e) => updateFields({ Street: e.target.value })}
      />
      <input
        required
        type="text"
        value={City}
        placeholder="City"
        onChange={(e) => updateFields({ City: e.target.value })}
      />
      <input
        required
        type="text"
        value={Address}
        placeholder="Address"
        onChange={(e) => updateFields({ Address: e.target.value })}
      />
      <input
        required
        type="number"
        value={Postalcode}
        placeholder="Postal Code"
        onChange={(e) => updateFields({ Postalcode: e.target.value })}
      />
    </FormWrapper>
  );
}
export default ShippingForm;
