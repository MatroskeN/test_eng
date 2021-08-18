import {useEffect, useState} from "react";



function Filter() {
    const [inputValue, setInputValue] = useState([]);
    return (
        <div className='filter'>
            <label className='filter__label' htmlFor="filter">Filter</label>
            <input type="text" onChange={((e) => setInputValue(e.target.value))} name="filter" id="filter" className='filter__text-box' value={inputValue}/>
        </div>
    )
}

export default Filter;