import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import SupportedPlatforms from "./SupportedPlatforms";
import TopMovies from "./TopMovies";
import "./Home.css";
import { SearchOptionsProvider } from "../../context/CurentSearchContext";
import NavBar from "../../components/NavBar";

const Home = () => {
	return (
		<>
			<SearchOptionsProvider>
				<NavBar></NavBar>
				<Header></Header>
				<TopMovies></TopMovies>
				<SupportedPlatforms></SupportedPlatforms>
				<Contact></Contact>
				<Footer></Footer>
			</SearchOptionsProvider>
		</>
	);
};
export default Home;
