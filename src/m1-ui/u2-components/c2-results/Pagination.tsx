import React, {useState} from "react";
import style from "../../u3-css/c3r2-Pagination.module.css";
import {useHistory} from "react-router-dom";


const Pagination = (props: PaginationPropsType) => {

    let [inputPage, setInputPage] = useState<string>("")
    let history = useHistory()
    let pageSize = 10
    let pageCount: number | undefined = Math.ceil(Number(props.totalResults) / pageSize);

    let pages: number[] = [];

    for (let i = 0; i <= pageCount; i++) {
        pages.push(i)
    }

    const pushUrl = (page: string) => {
        history.push(`/movies-search-redux-func/search-results/` + props.filmName + `/` + page)
    }


    if (pageCount >= 10) {
        let errorInput: boolean = Number(inputPage) >= pages.length || Number(inputPage) <= 0
        let errorButton: boolean = props.currentPage + 1 >= pages.length || props.currentPage <= 0

        let pageHandler = props.currentPage

        return <div
            className={style.compPaginBlock}
            style={props.onlySwitch ? {justifyContent: "center"} : {}}
        >
            <div
                className={style.compPaginBlock__changePageBlock}
                hidden={props.onlySwitch}
            >
                <span className={style.compPaginBlock__changePageBlock__span}>
                    Change page:
                </span>
                <input type="number"
                       className={style.compPaginBlock__changePageBlock__input}
                       value={inputPage}
                       onChange={(e) => {
                           setInputPage(e.currentTarget.value)
                       }}
                       onKeyPress={(e) => {

                           if (e.key === "Enter" && !errorInput) {
                               // props.setCurrentPage(Number(inputPage))
                               // props.searchingFilm(inputPage)
                               pushUrl(inputPage)

                           }

                       }}
                />

                <button className={style.compPaginBlock__changePageBlock__button}
                    onClick={() => {
                            pushUrl(inputPage)
                        }}
                        disabled={errorInput}
                >↪
                </button>
            </div>

            <div
                className={style.compPaginBlock__toggleBlock}
            >
                {props.currentPage !== 1 &&
                <button className={style.compPaginBlock__toggleBlock__button}
                    onClick={() => {
                    props.onlySwitch && window.scrollTo(0, 300)
                    pushUrl(String(pageHandler -= 1))


                }}>⇐...prev </button>}
                <div className={style.compPaginBlock__toggleBlock__currentPage}>
                    {props.currentPage}
                </div>
                <button
                    className={style.compPaginBlock__toggleBlock__button}
                    disabled={errorButton}
                    onClick={() => {
                        props.onlySwitch && window.scrollTo(0, 300)
                        pushUrl(String(pageHandler += 1))


                    }}> next...⇒
                </button>
            </div>

            <span
                className={style.compPaginBlock__totalPage}
                hidden={props.onlySwitch}
            >Total pages: {pages.length - 1}</span>
        </div>


    }


    return <div className={style.paginBlock}>
        {pages.map(p => {
            return <span hidden={p === 0 || pages.length === 2}
                         key={p}
                         className={props.currentPage === p ?
                             style.paginBlock__span__checked + " " + style.paginBlock__span :
                             style.paginBlock__span}
                         onClick={
                             () => {

                                 pushUrl(String(p))
                             }
                         }>
                {p}
            </span>
        })}
    </div>

}

type PaginationPropsType = {
    totalResults: string | undefined
    setCurrentPage: (currentPage: number) => void
    currentPage: number
    filmName: string
    onlySwitch?: boolean


}

export default React.memo(Pagination)
