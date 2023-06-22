import { Region } from "./RegionModel"
import { VodPlatforms } from "./VodPlatformsModel"

export type TvSeries = {
    id:number,
    name:string,
    overview:string,
    adult:boolean,
    episodes:number,
    region:Region,
    vodPlatforms:VodPlatforms[],
    poster_path:string,
    orginal_language:string,
    first_air_date:string,
    number_of_seasons:number
}