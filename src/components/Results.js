const Results = (props) => {

  const {queryData} = props.queryData;
  const {loading} = props.queryData;
  
  return (
    <>
      {loading && <p>Chargement...</p>}
      {!loading && queryData.map((queryData, i) => 
        <div key={i}>
          <p>{queryData.name}</p>
        </div>
      )}
    </>
  );
  
}

export default Results;
