import React, {useCallback, } from "react";
import Search from "./Search";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/reduxStore";
import {getSearchResults} from "../../../m2-bll/b1-reducers/r1-searchResultsReducer";

const SearchContainer = () => {

    let history = useHistory()
    const dispatch = useDispatch();
    const currentPage = useSelector<AppRootStateType, number>(state => state.searchResults.currentPage)

    const searchHandler = useCallback((value: string) => {
        history.push(`/movies-search-useState/search-results/` + value + `/` + 1)
        dispatch(getSearchResults(value))
    },[currentPage])


    return <Search
        searchHandler={searchHandler}
    />
}

export default React.memo(SearchContainer)