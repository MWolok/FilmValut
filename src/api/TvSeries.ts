import axios from "axios";

export class TvSeries {
	static getSeries = async (title:string) =>
		await axios.get("https://api.themoviedb.org/3/search/tv", {
			params: {
                query: title,
                include_adult: 'false',
				language: "en-US",
				page: "1",
			},
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2YwMDhjZmNlZDE0ZTI5MzU3NTdmZGJjMDUyNzY4YiIsInN1YiI6IjY0NDNjZmE4ZDM1ZGVhMDRhZGZiYTY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ODT_pTC6Oyiqoq-QYhri5TNeaHgUbnnmc2t2_BgxtCw",
			},
		});
}
