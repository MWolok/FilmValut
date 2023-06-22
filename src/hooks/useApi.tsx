import axios, { AxiosResponse } from "axios";
import React, { useCallback, useState } from "react";
import { MovieModel } from "../model/MovieModel.";

export type Props = {
	requestMethod:()=>Promise<AxiosResponse<any>>;
	applayDate: React.SetStateAction<MovieModel[]> => void;
};

export default function useApi({ requestMethod, applayDate }: any) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string>("");

	const sendRequest = useCallback(async () => {
		setIsLoading(true);
		try {
			const result = await requestMethod();
			applayDate(result.data);
		} catch (e) {
			if (axios.isAxiosError(e)) {
				setError(e.message + e.code);
			}
		}
		setIsLoading(false);
	}, []);

	return {
		isLoading: isLoading,
		error: error,
		sendRequest: sendRequest,
	};
}
