import { MovieModel } from "./MovieModel.";
import { Region } from "./RegionModel";
import { TvSeries } from "./TvSeriesModel";
import { VodPlatforms } from "./VodPlatformsModel";

export type UserProfilInformation = {
	id: number;
	email: string;
	password: string;
	username: string;
	name: string;
	surname: string;
	birthDate: string;
	gender: string;
	region: Region;
	profilePic: string;
	role: string;
	crreatedAt: string;
	lastActivity: string;
	tvSeries: TvSeries[];
	movies: MovieModel[];
	vodPlatforms: VodPlatforms[];
	active: boolean;
};
