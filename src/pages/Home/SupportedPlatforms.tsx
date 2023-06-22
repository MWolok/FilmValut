import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import apple from "../../img/platforms/apple.jpg";
import netflix from "../../img/platforms/netflix1.jpg";
import hbo from "../../img/platforms/hbop.jpg";
import disney from "../../img/platforms/disney1.jpg";
import amazon from "../../img/platforms/prime.jpg";
import { VodPlatformsApi } from "../../api/PaltformsApi";
import { VodPlatforms } from "../../model/VodPlatformsModel";
import { useEffect, useState } from "react";

const SupportedPlatforms = () => {
	const [platforms,setPlatforms] = useState<VodPlatforms[]>([]);

const getPlatforms= async()=>{
	const vodPlatformsToDisplay: VodPlatforms[]=[];
	const result = await VodPlatformsApi.getVod().then();
	for (let index = 0; index < 20; index++) {
		vodPlatformsToDisplay[index] = result.data[index]
	}
	console.log(vodPlatformsToDisplay)
	setPlatforms(vodPlatformsToDisplay);
}




useEffect(()=>{
	getPlatforms();
},[])

	return (
		<div className="py-5 platofrms">
			<h2 className="display-4 text-light">Supported Platforms</h2>
			<div className="underline-home"></div>

			<div className="col-12 platform-list justify-content-between py-5">
				{platforms.map(vod =>(<img	key={vod.name}
												src={`https://image.tmdb.org/t/p/w500/${vod.logoPath}`}
												alt="Admin"
												className="rounded-circle"
												width="150"
											/>))}
											
				
			</div>
		</div>
	);
};
export default SupportedPlatforms;

