import ky from 'ky'
const BASE_URL = 'https://rickandmortyapi.com/api/character'

async function fetchCharacters(){
    try{
        const response = await ky.get(BASE_URL).json()
        console.log(response)
        return response.results
    }catch (error){
        console.log(error)
        throw error
    }
}

export default fetchCharacters