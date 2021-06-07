import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Details from "../Details/Details";
import Styles from "./Results.module.scss";

const Results = (props) => {

  const {queryData} = props.queryData;
  const {loading} = props.queryData;
  const results = {...queryData}.results;
  const newData = props.newData;

  console.log("results props", props)
  console.log("results results", results)
  console.log("results newdata", newData)
  
  return (
    <>
      {loading && <p>Chargement...</p>}
      <section className={Styles.list}>
        {!loading && results.map((results, i) =>
          <div key={i}>
            <Router>
              <Link to={(results.name).replace(/ /g, "")} className={Styles.listLink}>{results.name}</Link>
              <Route path="/:id" render={() => <Details detail={results} />} />
            </Router>
          </div>
        )}
        {newData && newData.map((newData, i) =>
          <div key={i}>
            <Router>
              <Link to={(newData.name).replace(/ /g, "")} className={Styles.listLink}>{newData.name}</Link>
              <Route path="/:id" render={() => <Details detail={newData} />} />
            </Router>
          </div>
        )}
      </section>
    </>
  );

}

export default Results;
