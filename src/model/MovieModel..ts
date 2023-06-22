import { Region } from "./RegionModel";
import { VodPlatforms } from "./VodPlatformsModel";

export type MovieModel = {
	id: number;
	title: string;
	overview: string;
	runtime: string;
	credits: string;
	ratting: number;
	apiID: number;
	vodPlatforms: VodPlatforms[];
	region: Region;
	posterPath: string;
	releaseDate: string;
};
