import { ListGroup } from "react-bootstrap";
import UserMovieCard from "../../components/UserMovieCard";
import { useCallback, useEffect, useState } from "react";
import { MovieModel } from "../../model/MovieModel.";
import { TestMovie } from "../../api/PopularMovies";
import Pagination from "../../components/Pagination";
import { GetUserProfil } from "../../api/GetUserProfil";
import QuestionModal from "../../components/QuestionModal";
import QuizModal from "../../components/QuizScoreModal";

const UserMovies = () => {
	const [showModal, setShowModal] = useState(true);
	const [scoreModal, setScoreModal] = useState(false);
	const [score, setScore] = useState<number | null>();
	const [movies, setMovies] = useState<MovieModel[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesPerPage, setMoviesPerPage] = useState(8);

	const getMovies = useCallback(async () => {
		const result = await GetUserProfil.getProfil();
		setMovies(result.data.movies);
	}, []);

	useEffect(() => {
		getMovies();
	}, [getMovies]);

	//To do delate movie
	const delateMovieFromMovies = (id: number) => {
		console.log(id);
	};

	const indexOFLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOFLastMovie - moviesPerPage;
	const currentMovies = movies?.slice(indexOfFirstMovie, indexOFLastMovie);

	const changePage = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const closeModalQuiz = () => {
		setShowModal(false);
	};

	useEffect(() => {
	
	}, [score]);
	

	const passScoreOpenModal = (scor: number) => {
		setScore(scor);
		setScoreModal(true);
	};


	return (
		<>
			<QuestionModal
				// closeModal={closeModalQuiz}
				show={showModal}
				onHide={() => setShowModal(false)}
				getScoreOpenModal={passScoreOpenModal}
			/>
			<QuizModal
				show={scoreModal}
				onHide={() => setScoreModal(false)}
				score={score!}
				></QuizModal>
			<div className="conteiner-fluid min-vh-100">
				<div className="underline"></div>
				<div className="row row-cols-1 row-cols-md-4 g-4">
					{movies.length === 0 && (
						<p className="text-algin-center">No movies Found</p>
					)}

					{movies.length > 0 &&
						currentMovies.map((movie) => (
							<div key={movie.title} className="col">
								<UserMovieCard
									show={() => setShowModal(true)}
									movieDelate={delateMovieFromMovies}
									movie={movie}></UserMovieCard>
							</div>
						))}
				</div>
				<Pagination
					totalItems={movies.length}
					itemsPerPage={moviesPerPage}
					curentPage={changePage}></Pagination>
			</div>
		</>
	);
};
export default UserMovies;
