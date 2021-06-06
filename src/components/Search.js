import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getQueryData } from '../store/actions/queryAction';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('aa');
  const [chooseSearch, setChooseSearch] = useState('planets');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQueryData(chooseSearch, searchValue));
  }, [dispatch, chooseSearch, searchValue])
  
  const {queryData} = props.queryData;
  console.log('queries', queryData);

  return (
    <>
    </>
  );
};

const mapStateToProps = (state) => ({queryData: state.queryData});

export default connect(mapStateToProps)(Search);
