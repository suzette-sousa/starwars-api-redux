import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Details from "./Details";

const Results = (props) => {

  const {queryData} = props.queryData;
  const {loading} = props.queryData;
  
  return (
    <>
      {loading && <p>Chargement...</p>}
      {!loading && queryData.map((queryData, i) => 
        <div key={i}>
          <Router>
            <Link to={(queryData.name).replace(/ /g, "")}>{queryData.name}</Link>
            <Route path="/:id" render={() => <Details detail={queryData} />} />
          </Router>
          <p>{queryData.name}</p>
        </div>
      )}
    </>
  );

}

export default Results;
