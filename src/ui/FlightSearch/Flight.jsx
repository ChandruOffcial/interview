import styles from "./FlightSearch.module.css";

const FlightSearch = () => {
	return (
		<div className={styles.flightSearch}>
			<div className={styles.inputGroup}>
				<label htmlFor="from">From</label>
				<input type="text" id="from" placeholder="DEL" />
			</div>
			<div className={styles.swapIcon}>
				<span>&#x21c4;</span>
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="to">To</label>
				<input type="text" id="to" placeholder="DEL" />
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="departureDate">Departure Date</label>
				<input type="text" id="departureDate" placeholder="12 JUL '24" />
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="returnDate">Return Date</label>
				<input type="text" id="returnDate" placeholder="12 JUL '24" />
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
