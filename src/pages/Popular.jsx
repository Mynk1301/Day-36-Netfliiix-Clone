import movies from "../../movies";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function Popular() {
    let best = movies.filter(movie=>{
        return movie.imdb_rating >=8;
    })

    return (
        <>

          <div className="w-[90vw] mx-auto mt-20 flex  justify-between">
            <div className="flex gap-4">
            <Link to='/bollywood' className="text-white border border-neutral-400 rounded-md px-4 py-1">Bollywood</Link>
            <Link  to='/hollywood' className="text-white border border-neutral-400 rounded-md px-4 py-1">Hollywood</Link>
            </div>

            <div>
            <Link to={'/'}>
            <button   className=" text-white border rounded-md p-2">Go Back</button>
             </Link>

            </div>

          </div>

            <div className=" w-[90vw] mx-auto flex flex-wrap gap-4 mt-14">


                {
                    best.map(movie => <MovieCard img={movie.img} slug={movie.slug} />)
                }
            </div>


        </>
    )
}

export default Popular;