import React, {useCallback} from "react";
import Search from "./Search";
import {useHistory} from "react-router-dom";

const SearchContainer = () => {

    let history = useHistory()

    const searchHandler = useCallback((value: string) => {

        history.push(`/movies-search-redux-func/search-results/` + value + `/` + 1)
    }, [history])

    return <Search
                searchHandler={searchHandler}
    />
}

export default React.memo(SearchContainer)