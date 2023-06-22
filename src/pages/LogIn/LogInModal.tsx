import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FieldValues, useForm } from 'react-hook-form';
import BrandLogo from "../../components/BrandLogo";
import { UserLogInModel } from "../../model/UserLogInModel";

const LogInModal = (props: any) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserLogInModel>();

	const loginUserHandler = (data: FieldValues) => {
		const userLog: UserLogInModel = {
			userName: data.username,
			password: data.password,
		};
		console.log(userLog);
		console.log(errors);
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
						<input type="text" {...register("userName", { required: "You must enter your name" })} />
						<p>{errors.userName?.message}</p>



						<label htmlFor="password">Password</label>
						<input
							{...register("password", { required: "You must enter your password" })}
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
