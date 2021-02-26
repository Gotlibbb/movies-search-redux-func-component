import React, {useEffect} from "react"
import Movie from "./Movie";
import {useHistory, useParams} from "react-router-dom";
import {Preloader} from "../../u5-assets/Preloader";

const MovieContainer = () => {

    let url: { movieId: string, filmNameUrl: string } = useParams()
    let history = useHistory()

    useEffect(() => {
        // setFilmName(url.filmNameUrl)
        // viewMovie(url.movieId)

    }, [])

    const backToSearchHandler = () => {
        // history.push("/movies-search-useState/search-results/" + url.filmNameUrl + `/` + props.currentPage)
    }

    // if (props.preloader) return <Preloader/>


    return null
    // <Movie
    //     setFilmName={setFilmName}
    //     preloader={preloader}
    //     Title={title}
    //     imdbID={imdbID}
    //     Year={Year}
    //     Type={Type}
    //     Poster={Poster}
    //     Actors={Actors}
    //     BoxOffice={BoxOffice}
    //     Director={Director}
    //     Country={Country}
    //     Genre={Genre}
    //     imdbRating={imdbRating}
    //     Language={Language}
    //     Plot={Plot}
    //     Production={Production}
    //     Runtime={Runtime}
    //     Writer={Writer}
    //     viewMovie={viewMovie}
    //     currentPage={currentPage}
    //     backToSearchHandler={backToSearchHandler}
    //
    //
    // />
}

export default React.memo(MovieContainer)