const Filter = ({ onChangeProp }) => {
    
    return (
        <form>
            <label htmlFor="">
                Find contacts by name<br />
                <input type="text"
                onChange={evt => {
                    onChangeProp(evt.target.value)
                }}/>
            </label>
        </form>
    );

};

export default Filter;