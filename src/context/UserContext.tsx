import { createContext, useEffect, useState } from "react";

export type UserOptions = {
	isLogedIn: boolean;
	onLogout: () => void;
	onLogIn: (email: string, password: string) => void;
};

export const UserContext = createContext<UserOptions>({
	isLogedIn: false,
	onLogIn: (email, password) => {},
	onLogout: () => {},
});

export const UserContextProvider = (props: React.PropsWithChildren) => {
	const [isLogedIn, setIsLogedIn] = useState(true);

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
		if (storedUserLoggedInInformation === "1") {
			setIsLogedIn(true);
		}
	}, []);

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLogedIn(false);
	};
	const loginHandler = () => {
		localStorage.setItem("isLoggedIn", "1");
		setIsLogedIn(true);
	};

	return (
		<UserContext.Provider
			value={{
				isLogedIn: isLogedIn,
				onLogout: logoutHandler,
				onLogIn: loginHandler,
			}}>
			{props.children}
		</UserContext.Provider>
	);
};
