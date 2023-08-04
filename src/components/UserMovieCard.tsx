import { Button, ListGroup } from "react-bootstrap";
import { MovieModel } from "../model/MovieModel.";
import { TvSeries } from "../model/TvSeriesModel";

interface Props {
	movie: MovieModel;
	movieDelate: (id: number) => void;
	show: ()=>void;
}

const UserMovieCard = ({ movie, movieDelate,show }: Props) => {
	return (
		<>
			<div className="card">
				
				<div className="view overlay">
					<img
						className="card-img-top"
						src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
						alt="Card image cap"
					/>
					<a href="#!">
						<div className="mask rgba-white-slight"></div>
					</a>
				</div>

			
				<div className="card-body">
				
					<h4 className="card-title">{movie.title}</h4>
					
					<p className="card-text">{movie.credits}</p>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>ReleaseData : {movie.releaseDate}</ListGroup.Item>
						<ListGroup.Item>Run time: {movie.runtime} min</ListGroup.Item>
						<ListGroup.Item>Popularity: {movie.popularity} via MovieDb </ListGroup.Item>
							<ListGroup.Item>
						{movie.vodPlatforms.map((v) => (
						
								<a rel="noreferrer" target="_blank" href={v.vodURL}>
									<img
										src={`https://image.tmdb.org/t/p/w500/${v.logoPath}`}
										alt="logo"
										className="rounded-circle"
										width="50"
									/>
								</a>
							
						))}
						</ListGroup.Item>
					</ListGroup>
				
				<Button onClick={show}>Quiz</Button>
				</div>
			</div>
		</>
	);
};
export default UserMovieCard;
