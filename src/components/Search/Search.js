import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getQueryData } from '../../store/actions/queryAction';
import Results from '../Results/Results';
import Styles from "./Search.module.scss";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [chooseSearch, setChooseSearch] = useState('planets');
  const [isChecked, setIsChecked] = useState(true);
  const [whichPage, setWhichPage] = useState(1);
  const [newData, setNewData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQueryData(chooseSearch, searchValue, whichPage));
  }, [dispatch, chooseSearch, searchValue, whichPage])
  
  const {queryData} = props.queryData;
  const {loading} = props.queryData;
  
  console.log('queries', queryData); // TODO : TO DELETE
  console.log(loading)

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const chooseSearchChange = (e) => {  // TODO : TO IMPROVE
    if(e.target.id === "chooseSearch-planets") setChooseSearch("planets");
    if(e.target.id === "chooseSearch-people") setChooseSearch("people");
    setIsChecked(!isChecked);
    if(e.target.checked) e.target.checked = isChecked;
  };

  const getNextPage = () => {
    setWhichPage(whichPage + 1)
    const datasSet = new Set([
      ...newData,
      ...queryData
    ]);
    const datasSetArr = [...datasSet];
    console.log("set", datasSetArr)
    setNewData(datasSetArr)
  }
  useEffect(() => {
    console.log("testdatas", {newData, queryData});
  }, [newData, queryData]);

  return (
    <>
      <section>
        <h2>Rechercher</h2>
        <form id="searchForm">
          <input
            id="chooseSearch-planets"
            type="radio"
            name="chooseSearch"
            checked={isChecked}
            onChange={chooseSearchChange}
          />
          <label htmlFor="chooseSearch-planets">Planète</label>
          <input
            id="chooseSearch-people"
            type="radio"
            name="chooseSearch"
            onChange={chooseSearchChange}
          />
          <label htmlFor="chooseSearch-people">Personnage</label>
          <input
            type="search"
            name="searchValue"
            value={searchValue}
            autoComplete="off"
            onChange={handleInputChange}
          />
        </form>
      </section>
      
      <Results {...props} />

      <button onClick={getNextPage}>Page suivante</button>
    </>
  );
};

const mapStateToProps = (state) => ({queryData: state.queryData});

export default connect(mapStateToProps)(Search);