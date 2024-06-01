const getCharacterById = async (id = '0') => {
  const url = `https://thronesapi.com/api/v2/Characters/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    return { error: 'Character not found' };
  }
  const character = await response.json();
  return character;
};

const getCharacters = async () => {
  const url = `https://thronesapi.com/api/v2/Characters/`;
  const response = await fetch(url);
  const allCharacters = await response.json();
  return allCharacters;
};

export { getCharacterById, getCharacters };
