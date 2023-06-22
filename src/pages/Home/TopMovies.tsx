import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../../components/Carousel";
import "./Home.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { TestMovie } from "../../api/TestMovie";
import { SerchContext } from "../../context/CurentSearchContext";
import { Movie } from "../../api/Movie";
import { TvSeries } from "../../api/TvSeries";
import { MovieModel } from "../../model/MovieModel.";
import axios, { AxiosError } from "axios";

const TopMovies = () => {
	const [popularMovies, setPopularMovies] = useState<MovieModel[]>([]);
	const searchContext = useContext(SerchContext);
	const { title, type } = searchContext;
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string>("");

	const getMovies = useCallback (async () => {
		setIsLoading(true);
		try {
			const result = await TestMovie.getPopularMovies();
			setPopularMovies(result.data);
		} catch (e) {
			if (axios.isAxiosError(e)) {
				
				setError(e.message + e.code);
			}
		}
		setIsLoading(false);
	},[]);

	const findMovieorSeries = async() => {
		if (searchContext.title.length > 3) {
			if (!searchContext.type) {
				console.log("SZUKASZ TV SERIES");
				return;
			}
			const result = await Movie.getMovie(searchContext.title);
			console.log(result);
			setPopularMovies(result.data);
		}
	};

	useEffect(() => {
		findMovieorSeries();
	}, [title, type]);

	useEffect(() => {
		getMovies();
	}, [getMovies]);
	return (
		<div className="py-5">
			<h2 className="d-flex justify-content-center">
				{searchContext.title === "" ? "POPOULAR" : searchContext.title}
			</h2>
			<div className="underline-home"></div>
			<div className="container d-flex justify-content-around">
				{!isLoading && popularMovies.length > 0 && (
					<Carousel movies={popularMovies}></Carousel>
				)}
				{!isLoading && popularMovies.length === 0 && <p>Found no movies</p>}
				{!isLoading && error &&<p>{error}</p>}
				{isLoading && <p>Loading...</p>}
				

			</div>
		</div>
	);
};
export default TopMovies;
