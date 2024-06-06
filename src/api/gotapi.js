const link=import.meta.env.VITE_API_BASE_URL

const getCharacterById = async (id = '0') => {
  const url = `${link}/Characters/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    return { error: 'Character not found' };
  }
  const character = await response.json();
  return character;
};

const getCharacters = async () => {
  const url = `${link}/Characters/`;
  const response = await fetch(url);
  const allCharacters = await response.json();
  return allCharacters;
};

export { getCharacterById, getCharacters };
