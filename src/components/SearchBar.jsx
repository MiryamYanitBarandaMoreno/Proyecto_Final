const SearchBar = ({ values, handleInputChange, handleSearch }) => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="searchCharacter">ID Character</label>
      <input 
        className="form-control" 
        name="searchCharacter" 
        id="searchCharacter"
        onChange={handleInputChange}
        type="text" 
        value={values.searchCharacter}
      />
      <button onClick={handleSearch} className="btn-search">
      <img src="https://img.icons8.com/?size=100&id=112468&format=png&color=FFFFFF" alt="Search" style={{ width: '44px', height: '44px' }} />
      </button>
    </div>
  );
};

export default SearchBar;
