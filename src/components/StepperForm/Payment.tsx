import "../../pages/CheckOut/CheckOut.css";
import FormWrapper from "./FormWrapper";
type PaymentData = {
  Fullname: string;
  Cardnumber: string;
  CVV: string;
  Expirydate: string;
};

type PaymentFormProps = PaymentData & {
  updateFields: (fields: Partial<PaymentData>) => void;
};

export function PaymentForm({
  Fullname,
  Cardnumber,
  CVV,
  Expirydate,
  updateFields,
}: PaymentFormProps) {
  return (
    <FormWrapper title="Shipping Details">
      <label>Fullname</label>
      <input
        required
        type="text"
        value={Fullname}
        onChange={(e) => updateFields({ Fullname: e.target.value })}
      />
      <label>Cardnumber</label>
      <input
        required
        type="number"
        value={Cardnumber}
        onChange={(e) => updateFields({ Cardnumber: e.target.value })}
      />
      <label>CVV</label>
      <input
        required
        type="number"
        value={CVV}
        onChange={(e) => updateFields({ CVV: e.target.value })}
      />
      <label>Expirydate</label>
      <input
        required
        type="date"
        value={Expirydate}
        onChange={(e) => updateFields({ Expirydate: e.target.value })}
      />
    </FormWrapper>
  );
}
