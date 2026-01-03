const SearchFilter = ({
    search,
    setSearch,
    type,
    setType,
    parking,
    setParking
}) => {
    return (
        <div>
            <input 
            placeholder="Search by name/address"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="" >All Types</option>
                <option value="Rajasthani" >Rajasthani</option>
                <option value="Gujarati" >Gujarathi</option>
                <option value="Jain" >Jain</option>
                <option value="Thai" >Thai</option>
                <option value="North Indian" >North Indian</option>
                <option value="South Indian" >South Indian</option>

            </select>

            <select value={parking} onChange={(e) => setParking(e.target.value)}>
                <option value="" >All Types</option>
                <option value="true" >Parking</option>
                <option value="false" >No Parking</option>

            </select>
        </div>
    );
};

export default SearchFilter;