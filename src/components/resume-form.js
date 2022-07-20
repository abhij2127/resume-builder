export default function ResumeForm(){
	function getDetails(){
		console.log("Getting the details and processing!")
	}
	return(
		<div className="resume-form-container" id="createCV">
			<div className="form-sub-container">
				<h1 className="form-title">Please fill the form below</h1>
				<p className="form-subtitle">Let's Get Started with making your perfect resume</p>
				<form id="applicant-details-form" onSubmit={getDetails}>
					<div class="form-group">
						<label>Name</label>
						<input type="text" class="form-input" />
					</div>
					<div class="form-group">
						<label>Email</label>
						<input type="text" class="form-input" />
					</div>
					<div class="form-group">
						<label>Phone no.</label>
						<input type="text" class="form-input" />
					</div>
				
				</form>
			</div>
		</div>
	);
}
