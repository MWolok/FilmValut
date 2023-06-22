import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SerchContext } from "../context/CurentSearchContext";

const SerchBar = () => {
	const [searchOption, setSearchOption] = useState("");
	const [isAMovie, setIsaMovie] = useState(true);

	const searchContext = useContext(SerchContext);

	const CurrentValueOfSearchBar = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchOption(event.target.value);
	};
	const selectedType = (event: React.ChangeEvent<HTMLSelectElement>) => {
		if (event.target.value === "TvSeries") {
			setIsaMovie(false);
		}
	};
	const searchMovieOrTvSeries = () => {
		console.log(searchOption, isAMovie);
		searchContext.setTitle(searchOption);
		searchContext.setType(isAMovie);
		setSearchOption("");
	};

	return (
		<>
			<InputGroup className="mb-3">
				<Form.Control
					aria-label="Text input with dropdown button"
					onChange={CurrentValueOfSearchBar}
					value={searchOption}
				/>

				<Form.Select
					aria-label="Default select example"
					onChange={selectedType}>
					<option value="Movie">Movie</option>
					<option value="TvSeries">TvSeries</option>
				</Form.Select>
				<Button onClick={searchMovieOrTvSeries}>Serach</Button>
			</InputGroup>
		</>
	);
};

export default SerchBar;
