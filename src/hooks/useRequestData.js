import axios from 'axios'
import { useEffect, useState } from 'react'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(()=>{
        axios.get(url)
        .then(response => setData(response.data.results))
        .catch(err => console.log('Hmm... Something went wrong! :('))
    }, [url])  

    return data
}

export default useRequestData;