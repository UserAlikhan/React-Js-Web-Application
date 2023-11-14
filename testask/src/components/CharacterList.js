import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCharactersRequest, fetchCharactersFailure, fetchCharactersSuccess} from "../redux/actions";
import fetchCharacters from "../api/api"

const CharacterList = () => {
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.characters)

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchCharactersRequest())
            try {
                const result = await fetchCharacters()
                dispatch(fetchCharactersSuccess(result.results))
            }catch (error){
                dispatch(fetchCharactersFailure(error.message))
            }
        }
        fetchData()
    }, [dispatch]);

    if (characters.loading) {
        return <p>Loading...</p>;
    }

    if (characters.error) {
        return <p>Error: {characters.error}</p>
    }

    return (
        <div>
            <h2>Character List</h2>
            <ul>
                {characters.data.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CharacterList
