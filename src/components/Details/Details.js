import { useHistory } from 'react-router-dom';
import Styles from './Details.module.scss';

const Details = (props) => {

  props = props.detail;

  const history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <>
      <div className={Styles.ctr} onClick={handleClick}>
        <span className={Styles.close}>X<span hidden>Close</span></span>
        <div className={Styles.content}>
          {props.climate && 
            <>
              <h3 className={Styles.title}>Climat :</h3>
              <p className={Styles.info}>{props.climate}</p>
            </>
          }
          {props.diameter && 
            <>
              <h3 className={Styles.title}>Diamètre :</h3>
              <p className={Styles.info}>{props.diameter}</p>
            </>
          }
          {props.population && 
            <>
              <h3 className={Styles.title}>Population : </h3>
              <p className={Styles.info}>{props.population}</p>
            </>
          }
          {props.gender && 
            <>
              <h3 className={Styles.title}>Genre :</h3>
              <p className={Styles.info}>{props.gender}</p>
            </>
          }
          {props.hair_color && 
            <>
              <h3 className={Styles.title}>Couleur de cheveux :</h3>
              <p className={Styles.info}>{props.hair_color}</p>
            </>
          }
        </div>
      </div>
    </>
  );

}

export default Details;
