import React from "react"
import style from "../../u3-css/c3-Results.module.css"
import {Preloader} from "../../u5-assets/Preloader";
import {FilmPreviewType} from "../../../m2-bll/b1-reducers/r1-searchResultsReducer";
import Pagination from "./Pagination";
import FilmPreview from "./FilmPreview";


const Results = (props: ResultsPropsType) => {

    if (props.error) {
        return <span style={{color: "red"}}>{props.error}</span>
    }

    return <div className={style.resultsContainer}>

            <Pagination
                totalResults={props.totalResults}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                filmName={props.filmName}


            />
            {props.preloader ? <Preloader/> :
                <div className={style.resultsBlock}>
                    {props.searchResults.map((el) => {
                            let obj: FilmPreviewType = {
                                imdbID: el.imdbID,
                                Poster: el.Poster,
                                Title: el.Title,
                                Type: el.Type,
                                Year: el.Year,
                            }
                            return <FilmPreview
                                key={el.imdbID}
                                filmPreview={obj}
                                viewFilmHandler={props.viewFilmHandler}
                            />
                        }
                    )}

                </div>
            }
            <Pagination
                totalResults={props.totalResults}
                onlySwitch={true}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                filmName={props.filmName}
            />

    </div>
}

type ResultsPropsType = {
    preloader: boolean
    viewFilmHandler: (imdbID: string) => void
    searchResults: FilmPreviewType[]

    error: string | null
    totalResults: string
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    filmName: string
}

export default React.memo(Results)