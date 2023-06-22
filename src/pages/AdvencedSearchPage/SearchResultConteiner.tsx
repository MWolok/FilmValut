import { useCallback, useContext, useEffect, useState } from "react";
import "./SearchPage.css";
import { SerchContext } from "../../context/CurentSearchContext";
import { TvSeries } from "../../api/TvSeries";
import { Movie } from "../../api/Movie";
import context from "react-bootstrap/esm/AccordionContext";
import { TestMovie } from "../../api/TestMovie";
import { MovieModel } from "../../model/MovieModel.";
import { data } from "jquery";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";

const SearchResultConteiner = () => {
	const [resultOfSearch, setResoultOfSearch] = useState<MovieModel[]>(
		[]
	);
	const searchContext = useContext(SerchContext);
	const platforms = searchContext;
	const [activ, isActive] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const[moviesPerPage,setMoviesPerPage]= useState(8)

	const getMovies = useCallback( async () => {
		const result = await TestMovie.getPopularMovies().then();
		setResoultOfSearch(result.data);
		console.log(result.data);
	},[]);

	const dataSort = () => {
		console.log(
			resultOfSearch?.sort(
				(a: MovieModel, b: MovieModel) =>
					Number(new Date(a.releaseDate)) - Number(new Date(b.releaseDate))
			)
		);
	};


	useEffect(() => {
		getMovies();
	}, [getMovies]);
	const indexOFLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOFLastMovie - moviesPerPage;
	const currentMovies = resultOfSearch.slice(indexOfFirstMovie,indexOFLastMovie)

	const changePage = (pageNumber:number) =>{
		setCurrentPage(pageNumber)
			}

			const addToProfile = (id:number)=>{
						console.log("Id from movie to add" + id)
			}

	return (
		<div className="conteiner now py-5 overflow-auto d-flex justify-content-center ">
			<div className="title">
				<h1>Title</h1>
				<div className="dropdown filter">
					<button
						onClick={() => isActive(!activ)}
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Filters
					</button>
					<div
						className={activ ? "dropdown-menu show" : "dropdown-menu"}
						aria-labelledby="dropdownMenuButton">
						<option className="dropdown-item" value="">
							Popularity
						</option>
						<option onClick={dataSort} className="dropdown-item" value="Date">
							Date
						</option>
						<option className="dropdown-item" value="Rating">
							Rating
						</option>
					</div>
				</div>
			</div>
			<div className="row  justify-content-around">
				
				{currentMovies!.map((movie: MovieModel) => (
					<div
						key={movie.title}
						className="card card-high"
						style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{movie.title}</h5>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">Gener:</li>
							<li className="list-group-item">Provaider</li>
							<li className="list-group-item">Date:{movie.releaseDate}</li>
						</ul>
						<div className="card-body">
							<Link onClick={()=>addToProfile(movie.id)} className="card-link" to={""}>
								Add to Profile
							</Link>
							
						</div>
					</div>
				))}
				<Pagination itemsPerPage={moviesPerPage} totalItems={resultOfSearch.length} curentPage={changePage}></Pagination>
			</div>
		</div>
	);
};
export default SearchResultConteiner;
