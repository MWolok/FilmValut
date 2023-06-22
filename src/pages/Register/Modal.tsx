import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { RegisterModel } from "../../model/RegisterModel";
import { FieldValues, useForm, useFormContext } from 'react-hook-form';
import BrandLogo from "../../components/BrandLogo";

const ModalRegister = (props: any) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterModel>();

	const registerUserHendler = (data: FieldValues) => {
		const user: RegisterModel = {
			userName: data.username,
			email: data.email,
			password: data.password,
		};
		console.log(user);
		console.log(errors);
	};

	return (
		<Modal
			{...props}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					<BrandLogo></BrandLogo>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Register</h4>
				<form
					onSubmit={handleSubmit((data: FieldValues) => {
						registerUserHendler(data);
					})}
					className="d-flex flex-column mt-3">
					<label htmlFor="username">Username</label>

					<input
						{...register("userName", {
							required: "This is required",
							maxLength: 20,
							minLength: { value: 4, message: "Min lenght is 4" },
						})}></input>
				<p className="text-danger">{errors.userName?.message}</p>
					<label htmlFor="email">Email</label>

					<input
						{...register("email", {
							required: "This is required and must be an email",
							maxLength: 25,
							pattern:  (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
						})}></input>
					<p className="text-danger">{errors.email?.message}</p>

					<label htmlFor="password">Password</label>
					<input
						type="password"
						{...register("password", {
							required: "Min lenght 6",
							minLength: 6,
						})}
					/>
					<p className="text-danger">{errors.password?.message}</p>
					<Button className="my-5" type="submit">
						Send
					</Button>
				</form>
			</Modal.Body>
		</Modal>
	);
};
export default ModalRegister;
