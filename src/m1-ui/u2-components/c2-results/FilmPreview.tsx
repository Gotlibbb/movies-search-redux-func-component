import React from "react";
import style from '../../u3-css/c3r1-FilmPreview.module.css'
import {FilmPreviewType} from "../../../m2-bll/b1-reducers/r1-searchResultsReducer";


const FilmPreview = (props: FilmPreviewPropsType) => {


    return <div className={style.filmPreview}
                onClick={()=>props.viewFilmHandler(props.filmPreview.imdbID)}>
        <div className={style.Title}>{props.filmPreview.Title}</div>
        <img src={props.filmPreview.Poster} alt={"poster"}/>
        <div className={style.Year}>Year: {props.filmPreview.Year}</div>
        <div className={style.Type}>Type: {props.filmPreview.Type}</div>
    </div>
}

export type FilmPreviewPropsType = {

    filmPreview : FilmPreviewType
    viewFilmHandler: (imdbID: string) => void


}

export default React.memo(FilmPreview)