import React, {useState} from "react";
import style from '../../u3-css/App.module.css'


const Search = (props: SearchComponentPropsType) => {
    let [inputValue, setInputValue] = useState<string>("")

    return <div className={style.searchingBlock}>

        <div className={style.inputZone}>

            <input type={"text"}
                   autoFocus={true}
                   placeholder={"Enter name of movie "}
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onKeyPress={(e) => {
                       e.key === "Enter" && props.searchHandler(inputValue)
                   }}
            />

            <button onClick={()=>props.searchHandler(inputValue)}>Search</button>

        </div>
    </div>
}


type SearchComponentPropsType = {
    searchHandler: (inputValue: string) => void
}

export default React.memo(Search)