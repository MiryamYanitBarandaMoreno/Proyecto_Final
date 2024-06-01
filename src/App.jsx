import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import { getCharacterById, getCharacters } from './api/gotapi';
import { useForm } from "./hooks/useForm";
import Header from './components/Header';
import Footer from './components/Footer';
import Swal from 'sweetalert';
import './assets/css/index.css';

function App () {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacter, setFilteredCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCharacters = JSON.parse(localStorage.getItem('characters'));
    if (savedCharacters) {
      setCharacters(savedCharacters);
      setLoading(false);
    } else {
      const fetchData = async () => {
        const allCharacters = await getCharacters();
        setCharacters(allCharacters);
        localStorage.setItem('characters', JSON.stringify(allCharacters));
        setLoading(false);
      };
      fetchData();
    }

    const savedFilteredCharacter = JSON.parse(localStorage.getItem('filteredCharacter'));
    if (savedFilteredCharacter) {
      setFilteredCharacter(savedFilteredCharacter);
    }
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
      localStorage.setItem('filteredCharacter', JSON.stringify(character));
    }
    reset();
  };

  const handleReset = () => {
    setFilteredCharacter(null);
    localStorage.removeItem('filteredCharacter');
    reset();
  };

  return (
    <>
    <Header />
    <div className="container ">
      <div>
        <h2 class="my-4 text-white">Max Characters</h2>
      </div>
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col">
          <SearchBar 
            values={values}
            handleInputChange={handleInputChange}
            handleSearch={handleSearch}
          />
        </div>
        <div className="col-auto mb-3">
          <button onClick={handleReset} className="btn-reset">
            <img src="https://img.icons8.com/?size=100&id=lmg98GxKpRDA&format=png&color=FFFFFF" alt="Reset" style={{ width: '34px', height: '34px' }} />
          </button>
        </div>
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
    <Footer />
    </>
  );
}

export default App;
