import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { getCharacterById, getCharacters } from './api/gotapi';
import { useForm } from "./hooks/useForm";
import Swal from 'sweetalert';
import './assets/css/index.css';

function App () {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacter, setFilteredCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allCharacters = await getCharacters();
      setCharacters(allCharacters);
      setLoading(false);
    };
    fetchData();
  }, []);

  const [values, handleInputChange, reset] = useForm({ searchCharacter: "" });

  const handleSearch = async () => {
    const id = values.searchCharacter;
    if (id === "") return;

    const character = await getCharacterById(id);
    if (character.error) {
      Swal("Invalid ID", "Character not found", "error");
    } else {
      setFilteredCharacter(character);
    }
    reset();
  };

  const handleReset = () => {
    setFilteredCharacter(null);
    reset();
  };

  return (
    <div className="container">
      <h1 className="my-4">Game of Thrones Characters</h1>
      <div className="row">
        <SearchBar 
          values={values}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
        <button onClick={handleReset} className="btn btn-secondary ml-3">Reset</button>
      </div>
      
      <div className="row">
        <div className="col text-center"> 
          {loading ? <h2>Loading...</h2> :
            filteredCharacter ? 
            <CharacterCard character={filteredCharacter} /> :
            <div className="row">
              {characters.map(character => (
                <div className="col-md-4 mb-4" key={character.id}>
                  <CharacterCard character={character} />
                </div>
              ))}
            </div>
          }   
        </div>
      </div>
    </div>
  );
}

export default App;
