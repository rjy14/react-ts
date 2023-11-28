interface CarProps{
    brand: string
}

  function Car(props: CarProps) {
    return <h2>I am a {props.brand}!</h2>;
  }

  function Garage() {
    const carName: string = "Ford";
    return (
      <>
        <Car brand={carName} />
      </>
    );
  }
  
  export default Garage;
  