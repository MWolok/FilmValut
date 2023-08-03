import { ListGroup } from "react-bootstrap";
import { MovieModel } from "../model/MovieModel.";
import { TvSeries } from "../model/TvSeriesModel";

interface Props {
	series: TvSeries;
	tvSeriesDelate: (id: number) => void;
}
const UserTvSeriesCard = (props: TvSeries) => {
	return (
		<>
			<div className="card">
				<div className="view overlay">
					<img
						className="card-img-top"
						src={`https://image.tmdb.org/t/p/w500/${props.posterPath}`}
						alt="Card image cap"
					/>
					<a href="#!">
						<div className="mask rgba-white-slight"></div>
					</a>
				</div>

				<div className="card-body">
					<h4 className="card-title">{props.name}</h4>

					<p className="card-text">Episodes: {props.episodes}</p>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>
							First air date: {props.firstAirDate}
						</ListGroup.Item>
						<ListGroup.Item>
							Number of Seasons: {props.number_of_seasons}
						</ListGroup.Item>
						<ListGroup.Item>
							{props.vodPlatforms.map((v) => (
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
					{/* <!-- Button --> */}
				</div>
			</div>
		</>
	);
};
export default UserTvSeriesCard;
