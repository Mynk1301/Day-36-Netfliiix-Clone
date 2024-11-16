import { Link } from "react-router-dom";

function  MovieCard({img,slug}){
    return(
        <>
        <Link to={`/details/${slug}`}>
        <div className="flex-grow">
            <img src={img} className="w-40 h-56 object-cover rounded-xl " alt="" />
        </div>
        </Link>
        </>
    )
}

export default MovieCard;