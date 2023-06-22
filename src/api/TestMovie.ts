import axios from "axios";
import { MovieModel } from "../model/MovieModel.";

export class TestMovie {
	static getPopularMovies = async () =>
		await axios.get<MovieModel[]>(
			"http://localhost:8080/ext/movie/discovery?page=1",
			{
				
				headers: {
					accept: "application/json",
				},
			}
		);
}
