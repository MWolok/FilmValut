import { useEffect, useState, useContext } from "react";
import SerchBar from "../../components/SearchBar";
import { PlatformModel } from "../../model/PlatformModel";
import { SerchContext } from "../../context/CurentSearchContext";

const platformr = [
	{ name: "Netflix", checked: false },
	{ name: "Hbo", checked: false },
	{ name: "Amazon", checked: false },
	{ name: "Disney", checked: false },
	{ name: "Apple", checked: false },
];

const AdvencedSearchPage = () => {
	const searchContext = useContext(SerchContext);
	const [showPlatforms, setShowPlatforms] = useState(false);
	const [plaforms, setplatforms] = useState(platformr);

	const platformCheckHandler = (index: number) => {
		setplatforms(
			plaforms.map((platform, currenIndex) =>
				currenIndex === index
					? { ...platform, checked: !platform.checked }
					: platform
			)
		);
	};

	useEffect(() => {
		searchContext.setPlatform(plaforms);
		
	}, [platformCheckHandler]);

	return (
		<>
			<div className="underline w-100"></div>
			<div className="py-5 d-flex flex-column justify-content-center align-items-center">
				<div className="col-md-8">
					<SerchBar></SerchBar>
				</div>
				<div className="conteiner d-flex flex-row">
					<div className="dropdown">
						<button
							onClick={() => setShowPlatforms(!showPlatforms)}
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-mdb-toggle="dropdown"
							aria-expanded="false">
							Choose Platforms
						</button>
						<ul
							className={showPlatforms ? "dropdown-menu show" : "dropdown-menu"}
							aria-labelledby="dropdownMenuButton">
							{plaforms.map((platform: any, index: number) => (
								<li key={platform.name}>
									<a className="dropdown-item" href="#">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												checked={platform.checked}
												onChange={() => platformCheckHandler(index)}
												value={platform.name}
												id={`checkbox-${index}`}
											/>
											<label className="form-check-label" htmlFor="Checkme1">
												{platform.name}
											</label>
										</div>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
export default AdvencedSearchPage;
