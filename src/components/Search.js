import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getQueryData } from '../store/actions/queryAction';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [chooseSearch, setChooseSearch] = useState('planets');
  const [isChecked, setIsChecked] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQueryData(chooseSearch, searchValue));
  }, [dispatch, chooseSearch, searchValue])
  
  const {queryData} = props.queryData;
  console.log('queries', queryData); // TODO : TO DELETE

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const chooseSearchChange = (e) => {  // TODO : TO IMPROVE
    if(e.target.id === "chooseSearch-planets") setChooseSearch("planets");
    if(e.target.id === "chooseSearch-people") setChooseSearch("people");
    setIsChecked(!isChecked);
    if(e.target.checked) e.target.checked = isChecked;
  };

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
          <button type="submit">Rechercher</button>
        </form>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({queryData: state.queryData});

export default connect(mapStateToProps)(Search);
