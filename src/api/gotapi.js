
const getCharacterById = async (id='0') => {
  const url=`https://thronesapi.com/api/v2/Characters/${id}`
  const response = await fetch(url)
  const characters = await response.json()

  return characters
};


export default getCharacterById