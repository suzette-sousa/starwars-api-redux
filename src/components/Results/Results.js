import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Details from "../Details/Details";
import Styles from "./Results.module.scss";

const Results = (props) => {

  const {queryData} = props.queryData;
  const {loading} = props.queryData;
  
  return (
    <>
      {loading && <p>Chargement...</p>}
      <section className={Styles.list}>
        {!loading && queryData.map((queryData, i) =>
          <div key={i}>
            <Router>
              <Link to={(queryData.name).replace(/ /g, "")} className={Styles.listLink}>{queryData.name}</Link>
              <Route path="/:id" render={() => <Details detail={queryData} />} />
            </Router>
          </div>
        )}
      </section>
    </>
  );

}

export default Results;
