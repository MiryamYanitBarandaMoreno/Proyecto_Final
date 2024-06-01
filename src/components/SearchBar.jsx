const SearchBar = ({ values, handleInputChange, reset, setIdcharacter}) => {
  const handleSearch = () => {
    setIdcharacter(values.searchCharacter);
    reset();
    }
  

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
      <button onClick={handleSearch} className="btn btn-primary">Search</button>
    </div>
  );
};

export default SearchBar;
