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
  const [hidden, setHidden] = useState(true);

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
    setHidden(false);
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
      
      {!hidden && queryData.length + (queryData.length <= 1 ? ' résultat' : ' résultats')}

      <Results {...props} />

      <button onClick={getNextPage}>Page suivante</button>
    </>
  );
};

const mapStateToProps = (state) => ({queryData: state.queryData});

export default connect(mapStateToProps)(Search);
