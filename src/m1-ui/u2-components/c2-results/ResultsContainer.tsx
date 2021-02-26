import React, {useCallback, useEffect} from "react"
import Results from "./Results";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    FilmPreviewType,
    getSearchResults,
    setCurrentPage,
    setFilmName
} from "../../../m2-bll/b1-reducers/r1-searchResultsReducer";
import {AppRootStateType} from "../../../m2-bll/reduxStore";


const ResultsContainer = () =>{
    let url: { filmNameUrl: string, page: string } = useParams()

    useEffect(() => {
        dispatch(setCurrentPage(Number(url.page)))
        dispatch(setFilmName(url.filmNameUrl))
        dispatch(getSearchResults( url.filmNameUrl, Number(url.page)))
    }, [url.page,url.filmNameUrl ])

    const history = useHistory()
    const dispatch = useDispatch();
    const filmName = useSelector<AppRootStateType, string>(state => state.searchResults.filmName)
    const preloader = useSelector<AppRootStateType, boolean>(state => state.searchResults.preloader)
    const searchResults = useSelector<AppRootStateType, FilmPreviewType[] >(state => state.searchResults.searchResults)
    const error = useSelector<AppRootStateType,  string>(state => state.searchResults.error)
    const currentPage = useSelector<AppRootStateType,  number>(state => state.searchResults.currentPage)
    const totalResults = useSelector<AppRootStateType,  string>(state => state.searchResults.totalResults)


    const viewFilmHandler = useCallback((imdbID: string) => {
        history.push(`/movies-search-useState/movie/` + filmName + `/` + imdbID)

    }, [])


    return     <Results
                    viewFilmHandler={viewFilmHandler}
                    preloader={preloader}
                    searchResults={searchResults}
                    error={error}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    filmName={filmName}
                    totalResults={totalResults}

    />
}

export default React.memo(ResultsContainer)