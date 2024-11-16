import movies from "../../movies";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";



function Bollywood() {

    let bollywood = movies.filter(movie => {
        return movie.region == 'bollywood'
    })

    return (
        <>
            <div className=" w-[90vw] mx-auto flex flex-wrap gap-4 mt-44 ">
            <Link to={'/popular'}>
            <button   className=" text-white border rounded-md px-4 py-2 absolute top-20  right-20">Go Back</button>
            </Link>


                {
                    bollywood.map(movie => <MovieCard img={movie.img} slug={movie.slug} />)
                }
            </div>

        </>
    )
}

export default Bollywood;