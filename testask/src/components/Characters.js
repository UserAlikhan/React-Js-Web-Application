import React, {useEffect, useState} from "react";
import fetchCharacters from "../api/api";
import ky from "ky";

function Characters(){

    const [pageNumber, setPageNumber] = useState(1)


    const fetchChr = fetchCharacters()

    const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character')
    //         .then(res => res.json())
    //         .then((result)=> setData(result.results))
    // }, []);

    useEffect(() => {
        ky.get('https://rickandmortyapi.com/api/character')
            .json()
            .then((result)=> setData(result.results))
            .catch((error) => console.error('Error Fetching Data', error))
    }, []);

    console.log('Data', data)

    return(
        <>
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data && data.length > 0 ?
                        data.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-md shadow-md">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-600">Name:</label>
                                    <p className="text-lg font-semibold mb-2">{item.name}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-600">Status:</label>
                                    <p className="text-gray-700">{item.status}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-600">Species:</label>
                                    <p className="text-gray-700">{item.species}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Gender:</label>
                                    <p className="text-gray-700">{item.gender}</p>
                                </div>
                            </div>
                        ))
                        : <p className="text-center">Loading Characters</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Characters