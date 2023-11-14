export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const fetchCharactersRequest = () => ({ type: FETCH_CHARACTERS_REQUEST })
export const fetchCharactersSuccess = (characters) => ({ type: FETCH_CHARACTERS_SUCCESS, characters });
export const fetchCharactersFailure = (error) => ({ type: FETCH_CHARACTERS_FAILURE, error });