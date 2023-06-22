import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { UserContextProvider } from "./context/UserContext";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import path from "path";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/AdvencedSearchPage/SearchPage";
import Profil from "./pages/Profil/Profile";
import EditProfile from "./pages/Profil/EditProfile";
import Movies from "./pages/Movies/Movies";

const router = createBrowserRouter([
	{path: '/', element:<Home></Home>},
	{path:'/search', element:<SearchPage></SearchPage>},
	{path:"/profil", element:<Profil></Profil>},
	{path:'/profil/edit', element:<EditProfile></EditProfile>},
	{path:'/movies', element:<Movies></Movies>}
]);



const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

//przeniesc do appa
root.render(
	<React.StrictMode>
		<UserContextProvider>
		<RouterProvider router={router} />
		</UserContextProvider>
	</React.StrictMode>
);
