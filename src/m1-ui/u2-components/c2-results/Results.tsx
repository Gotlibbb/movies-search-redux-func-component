import React from "react"
import style from "../../u3-css/App.module.css"
import {Preloader} from "../../u5-assets/Preloader";
import {FilmPreviewType} from "../../../m2-bll/b1-reducers/r1-searchResultsReducer";
import Pagination from "./Pagination";
import FilmPreview from "./FilmPreview";


const Results = (props: ResultsPropsType) => {

    if (props.error) {
        return <span style={{color: "red"}}>{props.error}</span>
    }

    return <div className={style.searchingBlock}>


        <div className={style.searchResult}>


            <Pagination
                totalResults={props.totalResults}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                filmName={props.filmName}


            />

            {props.preloader ? <Preloader/> :
                <div className={style.searchResult}>
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