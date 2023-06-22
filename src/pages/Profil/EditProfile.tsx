import NavBar from "../../components/NavBar";
import Footer from "../Home/Footer";
import "./Profile.css";

const EditProfile = () => {



	return (
		<>
		<NavBar></NavBar>
			<div className="container-xl px-4 mt-4" >
				{/* <!-- Account page navigation--> */}

				<hr className="mt-0 mb-4" />
				<div className="row d-flex justify-content-center">

	
					<div className="col-xl-8">
						{/* <!-- Account details card--> */}
						<div className="card mb-4">
							<div className="card-header">Account Details</div>
							<div className="card-body">
								{/* <!-- htmlForm Group (username)--> */}
								<div className="mb-3">
									<label className="small mb-1" htmlFor="inputUsername">
										Username (how your name will appear to other users on the
										site)
									</label>
									<input
										className="form-control"
										id="inputUsername"
										type="text"
										placeholder="Enter your username"
										value="username"
									/>
								</div>
								{/* <!-- htmlForm Row--> */}
								<div className="row gx-3 mb-3">
									{/* <!-- htmlForm Group (first name)--> */}
									<div className="col-md-6">
										<label className="small mb-1" htmlFor="inputFirstName">
											First name
										</label>
										<input
											className="form-control"
											id="inputFirstName"
											type="text"
											placeholder="Enter your first name"
											value="Valerie"
										/>
									</div>
									{/* <!-- htmlForm Group (last name)--> */}
									<div className="col-md-6">
										<label className="small mb-1" htmlFor="inputLastName">
											Last name
										</label>
										<input
											className="form-control"
											id="inputLastName"
											type="text"
											placeholder="Enter your last name"
											value="Luna"
										/>
									</div>
								</div>
								{/* <!-- htmlForm Row        --> */}
								<div className="row gx-3 mb-3">
									{/* <!-- htmlForm Group (organization name)--> */}
									<div className="col-md-6">
										<label className="small mb-1" htmlFor="inputOrgName">
											Gender
										</label>
										<input
											className="form-control"
											id="inputOrgName"
											type="text"
											placeholder="Enter your organization name"
											value="Start Bootstrap"
										/>
									</div>
									{/* <!-- htmlForm Group (location)--> */}
									<div className="col-md-6">
										<label className="small mb-1" htmlFor="inputLocation">
											Location
										</label>
										<input
											className="form-control"
											id="inputLocation"
											type="text"
											placeholder="Enter your location"
											value="Poland"
										/>
									</div>
								</div>
								{/* <!-- htmlForm Group (email address)--> */}
								<div className="mb-3">
									<label className="small mb-1" htmlFor="inputEmailAddress">
										Email address
									</label>
									<input
										className="form-control"
										id="inputEmailAddress"
										type="email"
										placeholder="Enter your email address"
										value="name@example.com"
									/>
								</div>
								{/* <!-- htmlForm Row--> */}
								<div className="row gx-3 mb-3">
								
									{/* <!-- htmlForm Group (birthday)--> */}
									<div className="col-md-12">
										<label className="small mb-1" htmlFor="inputBirthday">
											Birthday
										</label>
										<input
											className="form-control"
											id="inputBirthday"
											type="text"
											name="birthday"
											placeholder="Enter your birthday"
											value="06/10/1988"
										/>
									</div>
								</div>
								{/* <!-- Save changes button--> */}
								<button   className="btn btn-primary" type="button">
									Save changes
								</button>
							</div>
						</div>
					</div>
				
                </div>
      
            </div>
			<Footer></Footer>
		</>
	);
};
export default EditProfile;
