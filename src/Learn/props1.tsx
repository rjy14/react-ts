import ReactDOM from 'react-dom';
interface CarProps {
  brand: { name: string; model: string };
}

function Car(props: CarProps) {
  return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  
  return (
    <>
      <Car brand={carInfo} />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
// parent to child