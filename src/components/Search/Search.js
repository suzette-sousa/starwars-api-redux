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
  const [hidden, setHidden] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQueryData(chooseSearch, searchValue, whichPage));
  }, [dispatch, chooseSearch, searchValue, whichPage])
  
  const {queryData} = props.queryData;
  const {loading} = props.queryData;
  let results = {...queryData}.results;
  const count = {...queryData}.count;
  const next = {...queryData}.next;
  const previous = {...queryData}.previous;

  const [newData, setNewData] = useState([]);
  
  console.log('queryData', queryData);
  console.log('queries', results); // TODO : TO DELETE
  console.log('count', count);
  console.log('next', next);
  console.log('previous', previous);
  console.log(loading)

  const handleInputChange = (e) => {
    if(e.target.value.trim !== "") setWhichPage(1);
    setSearchValue(e.target.value);
    setHidden(false);
  };

  const chooseSearchChange = (e) => {  // TODO : TO IMPROVE
    if(e.target.id === "chooseSearch-planets") setChooseSearch("planets");
    if(e.target.id === "chooseSearch-people") setChooseSearch("people");
    setIsChecked(!isChecked);
    if(e.target.checked) e.target.checked = isChecked;
  };

  const getPrevPage = () => {
    setWhichPage(whichPage - 1);
  }

  useEffect(() => {
    console.log("testdatas", {newData, results});
  }, [newData, results, whichPage]);

  const getNextPage = () => {
    setWhichPage(whichPage + 1);
    const datasSet = new Set([
      ...newData,
      ...results
    ]);
    const datasSetArr = [...datasSet];
    setNewData(datasSetArr)
  }

  return (
    <>
      <section>
        <h1 className={Styles.titleh1}>Starwars</h1>
        <h2 className={Styles.titleh2}>Rechercher dans la base</h2>
        <form id="searchForm" className={Styles.form}>
          <div className={Styles.radioCtr}>
            <input
              id="chooseSearch-planets"
              type="radio"
              name="chooseSearch"
              checked={isChecked}
              className={Styles.radioInput}
              onChange={chooseSearchChange}
            />
            <label 
              htmlFor="chooseSearch-planets" 
              className={Styles.radioLabel}>
                Planète
            </label>
            <input
              id="chooseSearch-people"
              type="radio"
              name="chooseSearch"
              className={Styles.radioInput}
              onChange={chooseSearchChange}
            />
            <label
              htmlFor="chooseSearch-people"
              className={Styles.radioLabel}>
              Personnage
            </label>
          </div>
          <input
            type="search"
            name="searchValue"
            value={searchValue}
            placeholder={`Saisir le nom ${chooseSearch === "planets" ? "d'une planète" : "d'un personnage"}`}
            autoComplete="off"
            className={Styles.inputSearch}
            onChange={handleInputChange}
          />
        </form>
      </section>
      
      {!hidden && count + (count <= 1 ? ' résultat' : ' résultats')}

      <Results {...props} newData={newData} />

      <div className={Styles.inputPrevNext}>
        {next && <button onClick={getNextPage} className={Styles.inputNext}>Charger + de résultats</button>}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({queryData: state.queryData, newData: state.newData});

export default connect(mapStateToProps)(Search);
