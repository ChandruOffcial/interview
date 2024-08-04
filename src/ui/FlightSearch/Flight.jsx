import { useState } from "react";
import styles from "./FlightSearch.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const FlightSearch = () => {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [startPoint, setStartPoint] = useState("");
	const [endPoint, setEndPoint] = useState("");

	function changePoints() {
		setEndPoint(startPoint);
		setStartPoint(endPoint);
	}

	// const convertDate = (dateString) => {
	// 	if (!dateString) return "";
	// 	const date = new Date(dateString);
	// 	const options = { year: "numeric", month: "2-digit", day: "2-digit" };
	// 	const newDate = new Intl.DateTimeFormat("en-US", options).format(date);
	// 	const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	// 	const [month, day, year] = newDate.split("/");
	// 	const formattedMonth = months[Number(month) - 1];
	// 	const shortYear = year.slice(-2);
	// 	const dateStr = `${day} ${formattedMonth} '${shortYear}`;
	// 	return console.log(dateStr);
	// };

	return (
		<div className={styles.flightSearch}>
			<div className={styles.inputGroup}>
				<label htmlFor="from">From</label>
				<input type="text" id="from" placeholder="DEL" value={startPoint} onChange={(e) => setStartPoint(e.target.value)} />
			</div>
			<div className={styles.swapIcon} onClick={changePoints}>
				<span>&#x21c4;</span>
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="to">To</label>
				<input type="text" id="to" placeholder="DEL" value={endPoint} onChange={(e) => setEndPoint(e.target.value)} />
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="departureDate">Departure Date</label>
				<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="12 JUL '24" id="departureDate" />
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="returnDate">Return Date</label>
				<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="12 JUL '24" id="returnDate" />
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="class">Class</label>
				<select id="class">
					<option>Business Class</option>
					<option>Economy Class</option>
				</select>
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="passenger">Passenger</label>
				<input type="text" id="passenger" placeholder="1 Adult, 0 Children" />
			</div>
		</div>
	);
};

export default FlightSearch;
