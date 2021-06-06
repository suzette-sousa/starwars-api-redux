const Details = (props) => {

  props = props.detail;
  console.log("propsdetails", props) //TODO : TO DELETE

  return (
    <>
      {props.climate && <p>Climat : {props.climate}</p>}
      {props.diameter && <p>Diamètre : {props.diameter}</p>}
      {props.population && <p>Population : {props.population}</p>}
      {props.gender && <p>Genre : {props.gender}</p>}
      {props.hair_color && <p>Couleur de cheveux : {props.hair_color}</p>}
    </>
  );

}

export default Details;
