import React from 'react';
import '../u3-css/App.module.css';
import style from '../u3-css/App.module.css'
import {Routes} from "../u4-routes/Routes";
import SearchContainer from "../u2-components/c1-search/SearchContainer";


const App = () => {
  return <div className={style.searchingContainer}>
    <div className={style.logo}><h1>Movies_Search</h1></div>
    <SearchContainer/>
    <Routes/>

  </div>
}

export default React.memo(App);
