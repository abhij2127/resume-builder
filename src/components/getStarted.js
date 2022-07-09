export default function Starter(){
	return(
		<div className="starter">
			<div className="rocket">🚀</div>
			<div className="description">
					Build your resume with resume builder and give a new flight to come one step closer to your dream job.<br />
					Resume builder is an open source project and you can contribute to it on github.
				<a href="https://github.com/abhij2127/resume-builder.git" className="gitLink" target="_blank">
					<div className="gitIcon">
						<img src="./gitIco.svg" /> <div>Contribute on GitHub</div>
					</div>
				</a>
				<div className="fireUp-container">
					<a href="#createCV" className="fire-up">
						Get Started
					</a>
				</div>
			</div>
		</div>
	);
}
