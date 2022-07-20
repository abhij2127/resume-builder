import React from "react";
export default function ResumeForm(){
	const [userDetails, setUserDetails] = React.useState(
		{
			name: "",
			email: "",
			phone: "",
			isEmployed: false
		}
	);
	console.log(userDetails);
	function getDetails(e){
		const {name, value, checked, type} = e.target
		setUserDetails(prev=>{
			return {
				...prev,
				[name]: type === "checkbox"?checked:value
			}
		});
	}
	return(
		<div className="resume-form-container" id="createCV">
			<div className="form-sub-container">
			
				<h1 className="form-title">Please fill the form below</h1>
				<p className="form-subtitle">
					Let's Get Started with making your perfect resume
				</p>
				
				<form id="applicant-details-form" >
				
					<div className="form-group">
						<label htmlFor="name-in">Name</label>
						<input 
							type="text" 
							className="form-input" 
							name="name" 
							onChange={getDetails}
							value={userDetails.name}
							id="name-in"
						/>
					</div>
					
					<div className="form-group">
						<label htmlFor="email-in">Email</label>
						<input 
							type="text" 
							className="form-input" 
							name="email" 
							onChange={getDetails}
							value={userDetails.email}
							id="email-in"
						/>
					</div>
					
					<div className="form-group">
						<label htmlFor="phone-in">Phone no.</label>
						<input 
							type="text" 
							className="form-input" 
							name="phone" 
							onChange={getDetails}
							value={userDetails.phone}
							id="phone-in"
						/>
					</div>
					
					<div className="form-group">
						<input 
							type="checkbox"
							name="isEmployed"
							checked = {userDetails.isEmployed}
							onChange = {getDetails}
							id = "employ-status"
						/>
							
						<label htmlFor="employ-status">Are you currently employed</label>
					</div>
				
				</form>
			</div>
		</div>
	);
}
