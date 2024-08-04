import { useRef, useState } from "react";

const About = () => {
	const [date, setDate] = useState("");
	const ref = useRef();
	console.log(date, ref);

	return (
		<div style={{ height: "90vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
			About
			<input type="date" ref={ref} value={date} placeholder="time" onChange={(e) => setDate(e.target.value)} />
		</div>
	);
};

export default About;
