import {useState, useEffect} from "react";

function Filter(props) {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            props.setFilteredWord(inputValue.toLowerCase());
        }, 1000);
        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    return (
        <div className="filter">
            <label className="filter__label" htmlFor="filter">
                Filter
            </label>
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                name="filter"
                id="filter"
                className="filter__text-box"
                value={inputValue}
            />
        </div>
    );
}

export default Filter;
