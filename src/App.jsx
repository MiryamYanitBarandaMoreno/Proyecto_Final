import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import getCharacterById from './api/gotapi';
import { useForm } from "./hooks/useForm"
import './assets/css/index.css';

function App () {
  const [characters, setCharacters] = useState()
  const [idcharacter, setIdcharacter] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setCharacters(await getCharacterById(idcharacter));
    };

    fetchData();
  }, [idcharacter]);

  const [values,handleInputChange,reset]=useForm({searchCharacter:""})

  return (
    <div className="container">
      <h1 className="my-4">Game of Thrones Characters</h1>
      <div className="row">
        <SearchBar 
        values={values}
        handleInputChange={handleInputChange}
        reset={reset}
        idcharacter={idcharacter}
        setIdcharacter={setIdcharacter}
        />
      </div>
      
      <div className="row">
        <div className="col text-center"> 
        {
          characters ?
          <CharacterCard characters={characters}/>:
          <h2>loading...</h2>
        }   
    </div>
    </div>
    </div>
  );
};

export default App;
