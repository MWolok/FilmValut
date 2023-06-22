import { ListGroup } from "react-bootstrap";
import { MovieModel } from "../model/MovieModel.";
import { TvSeries } from "../model/TvSeriesModel";

interface Props {
    movie:MovieModel,
    movieDelate:(id:number)=>void
}


const UserMovieCard =({movie,movieDelate}:Props)=> {

	

	return (
		<>
			<div className="card">
				{/* <!-- Card image --> */}
				<div className="view overlay">
					<img
						className="card-img-top"
						src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
						alt="Card image cap"
					/>
					<a href="#!">
						<div className="mask rgba-white-slight"></div>
					</a>
				</div>

				{/* <!-- Card content --> */}
				<div className="card-body">
					{/* <!-- Title --> */}
					<h4 className="card-title">{movie.title}</h4>
					{/* <!-- Text --> */}
					<p className="card-text">{movie.credits}</p>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>{movie.releaseDate}</ListGroup.Item>
						<ListGroup.Item>{movie.runtime}</ListGroup.Item>
						<ListGroup.Item>{movie.ratting}</ListGroup.Item>
					</ListGroup>
					{/* <!-- Button --> */}
					<a
						href="#"
						onClick={() => movieDelate(movie.id)}
						className="btn btn-primary">
						Button
					</a>
				</div>
			</div>
		</>
	);
};
export default UserMovieCard;
