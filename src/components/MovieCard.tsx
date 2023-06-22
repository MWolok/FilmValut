import { MovieModel } from "../model/MovieModel.";
import "./MovieCard.css";

const MovieComp = (props: any) => {





	
	return (
		<div className="movie-card">
			<div
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.posterPath})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
				className="img one"></div>
			<div className="text text-one">
				<h3 className="title-card">{props.title}</h3>

				<p>{props.overview}</p>
			</div>
		</div>
	);
};
export default MovieComp;
