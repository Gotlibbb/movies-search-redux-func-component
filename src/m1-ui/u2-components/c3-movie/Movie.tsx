import style from "../../u3-css/c4-Movie.module.css";
import React from "react";
import {MovieType} from "../../../m2-bll/b1-reducers/r2-movieReducer";
import {Preloader} from "../../u5-assets/Preloader";

const Movie = (props: MoviePropsType) => {

    if (props.preloader) return <Preloader/>

    if (!props.movie) return <Preloader/>

    if (!props.movie.Title) return <Preloader/>


    return <div className={style.moviePageContainer}>

        <span className={style.moviePageContainer__backToSearch} onClick={props.backToSearchHandler}>⇦ Back to search</span>

        <div className={style.moviePageContainer__title}>{props.movie.Title}</div>

        <div className={style.moviePageContainer__movieBlock}>

            <img className={style.moviePageContainer__movieBlock__img} src={props.movie.Poster} alt={"poster"}/>

            <div className={style.moviePageContainer__movieBlock__movieInfo}>


                <div><u><b>Production</b></u>: {props.movie.Production}</div>
                <div><u><b>Type</b></u>: {props.movie.Type}</div>
                <div><u><b>Genre</b></u>: {props.movie.Genre}</div>
                <div><u><b>imdbRating</b></u>: {props.movie.imdbRating}</div>
                <div><u><b>Country</b></u>: {props.movie.Country}</div>
                <div><u><b>Year</b></u>: {props.movie.Year}</div>
                <div><u><b>Language</b></u>: {props.movie.Language}</div>
                <div><u><b>Director</b></u>: {props.movie.Director}</div>
                <div><u><b>Actors</b></u>: {props.movie.Actors}</div>
                <div><u><b>Brief description</b></u>: {props.movie.Plot}</div>
                <div><u><b>Box office</b></u>: {props.movie.BoxOffice}</div>
                <div><u><b>Runtime</b></u>: {props.movie.Runtime}</div>

            </div>
        </div>

    </div>

}


type MoviePropsType = {

    preloader: boolean

    movie: MovieType | null

    backToSearchHandler: () => void
}


export default React.memo(Movie)