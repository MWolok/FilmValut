import { useCallback, useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FieldValues, useForm } from "react-hook-form";
import BrandLogo from "../../components/BrandLogo";
import { UserLogInModel } from "../../model/UserLogInModel";
import { AuthApi } from "../../api/AuthApi";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { UserContext } from "../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const LogInModal = (props: any, onHide: () => void) => {
	const navigate = useNavigate();
	const userContex = useContext(UserContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserLogInModel>();

	const loginUserHandler = async (data: FieldValues) => {
		const userLog: UserLogInModel = {
			username: data.username,
			password: data.password,
		};

		try {
			const resoult = await AuthApi.signIn(userLog);
			localStorage.setItem("TOKEN", "response-token");
			userContex.onLogIn(resoult.data, userLog.username);
			console.log(resoult.data);
			toast.success(`Welcome`, {
				position: "top-center",
				autoClose: 2000,
				theme: "light",
			});
			props.closeModal();
		} catch (error) {
			if (isAxiosError(error)) {
				toast.error(error.message, {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		}
	};

	return (
		<>
			<Modal {...props} dialogClassName="modal-30w">
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						<BrandLogo></BrandLogo>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						onSubmit={handleSubmit((data: FieldValues) => {
							loginUserHandler(data);
						})}
						className="d-flex flex-column mt-3">
						<label htmlFor="userName">Username</label>
						<input
							type="text"
							{...register("username", {
								required: "You must enter your name",
							})}
						/>
						<p>{errors.username?.message}</p>

						<label htmlFor="password">Password</label>
						<input
							{...register("password", {
								required: "You must enter your password",
							})}
							type="password"
						/>
						<p>{errors.password?.message}</p>
						<Button type="submit">Enter</Button>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default LogInModal;
