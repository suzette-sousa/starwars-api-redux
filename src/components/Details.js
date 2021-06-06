import { useHistory } from 'react-router-dom';

const Details = (props) => {

  props = props.detail;
  console.log("propsdetails", props) //TODO : TO DELETE

  const history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <>
      {props.climate && <p>Climat : {props.climate}</p>}
      {props.diameter && <p>Diamètre : {props.diameter}</p>}
      {props.population && <p>Population : {props.population}</p>}
      {props.gender && <p>Genre : {props.gender}</p>}
      {props.hair_color && <p>Couleur de cheveux : {props.hair_color}</p>}
      <button type="button" onClick={handleClick}>x Fermer</button>
    </>
  );

}

export default Details;
