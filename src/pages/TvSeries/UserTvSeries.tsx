import { ListGroup } from "react-bootstrap";
import UserMovieCard from "../../components/UserMovieCard";
import { TvSeries } from "../../model/TvSeriesModel";
import { useState } from "react";
import UserTvSeriesCard from "../../components/UserTvSeriesCard";

const UserTvSeries = () => {
	const [tvseries, setTvSeries] = useState<TvSeries[]>([]);

    //api call for tv series 

	return (
		<>
			<div className="conteiner-fluid min-vh-100">
				<div className="underline"></div>
				<div className="row row-cols-1 row-cols-md-4 g-4">
					<div className="col">
						{tvseries.length === 0 && (
							<p className="text-algin-center">No tv series Found</p>
						)}

						{tvseries.length > 0 &&
							tvseries.map((series) => (
								<UserTvSeriesCard {...series}></UserTvSeriesCard>
							))}
					</div>
				</div>
			</div>
		</>
	);
};
export default UserTvSeries;
