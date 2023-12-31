import { useState, useEffect } from "react"
import apeClient from "../services/ape-client"
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genre } from "./useGenres";


interface FetchResponse<T> {
    count: number;
    results: Genre[]
}

const useData =<T> (endpoint:string, requestConfig?: AxiosRequestConfig, deps?:any[]) => {

    const [data, setData] =useState<Genre[]>([])
    const [error, setError] =useState('')
    const [isLoading, setLoading] = useState(false);



    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apeClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal,...requestConfig})
        .then(res => {
            setData(res.data.results);
            setLoading(false);
        })
        .catch(err =>  {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        })
            

        return () => controller.abort();
    }, deps ? [...deps] : [])

    return { data, error, isLoading}
}

export default useData