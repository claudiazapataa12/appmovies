import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useMovies=()=>{
    const [isLoading, setIsLoading] = useState(true)
    const [peliculas, setPeliculas] = useState({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });


    const getMovies= useCallback( async()=>{
        try {
            setIsLoading(true)
        
            const nowPlaying = axios.get("/now_playing");
            const popular = axios.get("/popular");
            const topRated = axios.get("/top_rated");
            const upcoming = axios.get("/upcoming");

            const response = await Promise.all([
                nowPlaying,
                popular,
                topRated,
                upcoming,
            ])

            setPeliculas({
                nowPlaying: response[0].data.results,
                popular: response[1].data.results,
                topRated: response[2].data.results,
                upcoming: response[3].data.results,
            })

            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log("error en getMovies", error.message);
        }
    },[])

    useEffect(() => {
        getMovies()
    }, []);


    return{
        peliculas,
        isLoading,
    }

}
