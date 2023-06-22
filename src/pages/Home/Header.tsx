import SerchBar from "../../components/SearchBar";
import "./Home.css";
const HeaderComp = () => {
	return (
		<section className="header">
			<div className="hero_img">
				<div className="hero_shadow"></div>
				<div className="header_info">
					<h1>You want to watch a movie</h1>
					<h3>Check where it is available</h3>
				</div>
				<div className="input_conteiner">
					<div className="input_box">
						<SerchBar ></SerchBar>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HeaderComp;
