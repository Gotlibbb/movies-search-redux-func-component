import React, {useState} from "react";
import style from '../../u3-css/c2-Search.module.css'


const Search = (props: SearchComponentPropsType) => {
    let [inputValue, setInputValue] = useState<string>("")

    return <div className={style.searchContainer}>

        <div className={style.searchContainer__logo}><h1>Movies_Search</h1></div>


        <div className={style.searchContainer__inputZone}>

            <input type={"text"}
                   className={style.searchContainer__inputZone__input}
                   autoFocus={true}
                   placeholder={"Enter name of movie "}
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onKeyPress={(e) => {
                       e.key === "Enter" && props.searchHandler(inputValue)
                   }}
            />

            <input type={"submit"}
                   className={style.searchContainer__inputZone__button}
                    onClick={() => props.searchHandler(inputValue)}
                   value={"Search"}
            />


        </div>
    </div>
}


type SearchComponentPropsType = {
    searchHandler: (inputValue: string) => void
}

export default React.memo(Search)