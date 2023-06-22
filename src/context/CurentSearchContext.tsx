import { createContext, useState } from "react";
import { PlatformModel } from "../model/PlatformModel";

export type SearchOptions = {
	title: string;
	setTitle: (s: string) => void;
	type: boolean;
	setType: (b: boolean) => void;
	gener: any;
	setGener: (s: any) => void;
	platform: PlatformModel[];
	setPlatform: (s: PlatformModel[]) => void;
	year: number | null;
	setYear: (s: number) => void;
};

export const SerchContext = createContext<SearchOptions>({
	title: "",
	setTitle: () => {},
	type: true,
	setType: () => {},
	gener: [],
	setGener: () => {},
	platform: [],
	setPlatform: () => {},
	year: null,
	setYear: () => {},
});
export const SearchOptionsProvider = (props: React.PropsWithChildren) => {
	const [title, setCurrentTitle] = useState("");
	const [type, setCurrentType] = useState(true);
	const [gener, setCurrentGener] = useState<any>([]);
	const [platform, setCurrenPlatforms] = useState<PlatformModel[]>([]);
	const [year, setCurrentYear] = useState<number|null>(null);

	const setTitle = (name: string) => {
		setCurrentTitle(name);
	};
	const setType = (type: boolean) => {
		setCurrentType(type);
	};
	const setGener = (gen:any)=>{
		setCurrentGener(gen);
	}
	const setPlatform = (pla:PlatformModel[]) =>{
		setCurrenPlatforms(pla);
	}
	const setYear = (ye:number|null) =>{
		setCurrentYear(ye);
	}
	

	return (
		<SerchContext.Provider
			value={{
				title: title,
				setTitle: setTitle,
				type: type,
				setType: setType,
				gener:gener,
				setGener:setGener,
				platform:platform,
				setPlatform:setPlatform,
				year:year,
				setYear:setYear,
			}}>
			{props.children}
		</SerchContext.Provider>
	);
};
