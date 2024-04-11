import { useState } from "react"
import axios from "axios"


const useFetch = (url) => {
    const [response, setResponse] = useState()
    const getResponse = () =>{
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err=>console.log(err))
    }
    return [response, getResponse]

}

export default useFetch
