import NavBar from "../../components/NavBar";
import { SearchOptionsProvider } from "../../context/CurentSearchContext";
import Footer from "../Home/Footer";
import AdvencedSearchPage from "./AdvencedSearchBar";
import "./SearchPage.css";
import SearchResultConteiner from "./SearchResultConteiner";
const SearchPage = () => {
	return (
		<>
			<SearchOptionsProvider>
				<NavBar></NavBar>
				<AdvencedSearchPage></AdvencedSearchPage>
				<SearchResultConteiner></SearchResultConteiner>
				<Footer></Footer>
			</SearchOptionsProvider>
		</>
	);
};
export default SearchPage;
