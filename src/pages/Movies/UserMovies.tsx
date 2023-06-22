import { ListGroup } from "react-bootstrap";
import UserMovieCard from "../../components/UserMovieCard";
import { useCallback, useEffect, useState } from "react";
import { MovieModel } from "../../model/MovieModel.";
import { TestMovie } from "../../api/TestMovie";
import Pagination from "../../components/Pagination";

const UserMovies = () => {
	const [movies, setMovies] = useState<MovieModel[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const[moviesPerPage,setMoviesPerPage]= useState(8)

	const getMovies = useCallback(async () => {
		const result = await TestMovie.getPopularMovies();
		setMovies(result.data);
	}, []);



	useEffect(() => {
		getMovies();
	}, [getMovies]);

	//Api call to for movies
	const delateMovieFromMovies = (id: number) => {
		console.log(id);
	};

	const indexOFLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOFLastMovie - moviesPerPage;
	const currentMovies = movies.slice(indexOfFirstMovie,indexOFLastMovie)


	const changePage = (pageNumber:number) =>{
setCurrentPage(pageNumber)
	}


	return (
		<>
			<div className="conteiner-fluid min-vh-100">
				<div className="underline"></div>
				<div className="row row-cols-1 row-cols-md-4 g-4">
					
						{movies.length === 0 && (
							<p className="text-algin-center">No movies Found</p>
						)}

						{movies.length > 0 &&
							currentMovies.map((movie) => (
								<div key={movie.title} className="col"><UserMovieCard
								movieDelate={delateMovieFromMovies}
								movie={movie}></UserMovieCard></div>
							))}
							<Pagination totalItems={movies.length} itemsPerPage={moviesPerPage} curentPage={changePage}></Pagination>
					</div>
				
			</div>
		</>
	);
};
export default UserMovies;

