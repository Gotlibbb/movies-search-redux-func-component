import React, {useCallback, useEffect} from "react"
import Movie from "./Movie";
import {useHistory, useParams} from "react-router-dom";
import {Preloader} from "../../u5-assets/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/reduxStore";
import {getMovie, MovieType} from "../../../m2-bll/b1-reducers/r2-movieReducer";
import {setFilmName} from "../../../m2-bll/b1-reducers/r1-searchResultsReducer";

const MovieContainer = () => {

    const url: { movieId: string, filmNameUrl: string } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()


    const movie = useSelector<AppRootStateType, MovieType | null>(state => state.movie.movie)
    const currentPage = useSelector<AppRootStateType, number>(state => state.searchResults.currentPage)
    const preloader = useSelector<AppRootStateType, boolean>(state => state.searchResults.preloader)


    useEffect(() => {
        dispatch(setFilmName(url.filmNameUrl))
        dispatch(getMovie(url.movieId))

    }, [url.movieId, url.filmNameUrl, dispatch])

    const backToSearchHandler = useCallback(() => {

        history.push("/movies-search-redux-func/search-results/" + url.filmNameUrl + `/` + currentPage)
    }, [url.filmNameUrl, currentPage, history])


    if (preloader) return <Preloader/>


    return <Movie
        preloader={preloader}
        movie={movie}
        backToSearchHandler={backToSearchHandler}
    />
}

export default React.memo(MovieContainer)