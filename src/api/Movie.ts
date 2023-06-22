import axios from "axios";
import { MovieModel } from "../model/MovieModel.";

export class Movie {
	static getMovie = async (title:string) =>
		await axios.get<MovieModel[]>("http://localhost:8080/movies/search", {
			params: {
                query: title,
			},
			headers: {
				accept: "application/json",
		
			},
		});
}
