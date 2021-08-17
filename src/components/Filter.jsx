function Filter() {
    return (
        <div className='filter'>
            <label className='filter__label' htmlFor="filter">Filter</label>
            <input type="text" name="filter" id="filter" className='filter__text-box'/>
        </div>
    )
}

export default Filter;