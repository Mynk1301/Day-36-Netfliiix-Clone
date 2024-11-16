import { useParams } from "react-router-dom";
import movies from "../../movies";
import { useState } from "react";
import ReactPlayer from "react-player";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

let MuteIcon = () =>
    (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-mute" viewBox="0 0 16 16">
  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
</svg>);


let UnMuteIcon = () =>
    (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
</svg>);



function Details(){
    let [volume , setVolume] = useState(true);
    let {slug} = useParams();
    let movie = movies.find((movie)=>{
        return movie.slug == slug
    })

    let suggestions = movies.filter((data)=>{
        return data.genre === movie.genre && data.imdb_rating >= movie.imdb_rating
    })

    console.log(suggestions);
    function volumeHandler(){
        setVolume((prev)=>!prev)
    }

    return(
        <>
        <div className="relative w-full h-[80vh] overflow-hidden">
        <ReactPlayer width='100vw' muted={volume} playing='true' loop='true' className="scale-[1.50]" height='80vh' url={movie.youtube_trailer} />
        <div className="absolute top-72 left-36 w-[400px]">
        <div className="bg-orange-600 inline-block rounded-md text-sm mt-2 text-white px-4 py-1">IDMB Ratings : {movie.imdb_rating}</div>
            <h1 className="text-white  text-5xl font-black mt-1">{movie.title}</h1>
            <p className="text-white mt-2">{movie.description}</p>
            <button className="bg-white  px-5 py-2 mt-2 rounded-md">Add to Watchlist</button>
        </div>

        <Link to={'/'}>
        <button   className="absolute top-10 right-10 text-white border rounded-md p-2">Go Back</button>
        </Link>

        <button onClick={volumeHandler}  className="absolute right-44 bottom-40 text-white border rounded-full p-2">{volume ? <MuteIcon/>  : <UnMuteIcon/> }</button>
        </div>

        <div className="w-[95vw]  mt-10 mx-auto">
            <h1 className="text-white font-bold text-4xl "> More like this</h1>

            <div className="flex mt-10 flex-wrap gap-4">
            {
                suggestions.map(movie=><MovieCard img={movie.img} slug={movie.slug}/>)
            }

            </div>


        </div>
        </>
    )
}

export default Details;