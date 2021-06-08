import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Details from "../Details/Details";
import Styles from "./Results.module.scss";

const Results = (props) => {

  const {queryData} = props.queryData;
  const {loading} = props.queryData;
  const results = {...queryData}.results;
  
  return (
    <>
      {loading && <p>Chargement...</p>}
      <section className={Styles.list}>
        {!loading && results.map((results, i) =>
          <div key={i}>
              <Link to={{pathname: `/test/${results.name}`, state: {results}}} key={results.id} className={Styles.listLink}>
              {results.name}
              </Link>
          </div>
        )}
      </section>
    </>
  );

}

export default Results;
