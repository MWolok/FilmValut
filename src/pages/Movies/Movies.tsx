import { useState } from "react"
import NavBar from "../../components/NavBar"
import { MovieModel } from "../../model/MovieModel."
import Footer from "../Home/Footer"
import UserMovies from "./UserMovies"

const Movies = () =>{



return(<>
<NavBar></NavBar>
<UserMovies></UserMovies>
<Footer></Footer>
</>)


}
export default Movies