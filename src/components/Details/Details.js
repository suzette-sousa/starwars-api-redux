import { useHistory } from 'react-router-dom';
import Styles from './Details.module.scss';

const Details = (props) => {

  const results = props.location.state.results;

  const history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <>
      <div className={Styles.ctr} onClick={handleClick}>
        <span className={Styles.close}>X<span hidden>Close</span></span>
        <div className={Styles.content}>
          {results.climate && 
            <>
              <h3 className={Styles.title}>Climat :</h3>
              <p className={Styles.info}>{results.climate}</p>
            </>
          }
          {results.diameter && 
            <>
              <h3 className={Styles.title}>Diamètre :</h3>
              <p className={Styles.info}>{results.diameter}</p>
            </>
          }
          {results.population && 
            <>
              <h3 className={Styles.title}>Population : </h3>
              <p className={Styles.info}>{results.population}</p>
            </>
          }
          {results.gender && 
            <>
              <h3 className={Styles.title}>Genre :</h3>
              <p className={Styles.info}>{results.gender}</p>
            </>
          }
          {results.hair_color && 
            <>
              <h3 className={Styles.title}>Couleur de cheveux :</h3>
              <p className={Styles.info}>{results.hair_color}</p>
            </>
          }
        </div>
      </div>
    </>
  );

}

export default Details;
