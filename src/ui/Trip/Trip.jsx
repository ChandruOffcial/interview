import { useState } from "react";
import styles from "./Trip.module.css";

const Trip = () => {
	const [selectedRadio, setSelectedRadio] = useState("one-way");

	return (
		<div className={styles.tripContainer}>
			<div className={styles.radio}>
				<input
					id="one-way"
					name="trip"
					type="radio"
					checked={selectedRadio === "one-way"}
					onChange={() => setSelectedRadio("one-way")}
					className={styles.radioInput}
				/>
				<label htmlFor="one-way" className={styles.radioLabel}>
					One Way Trip
				</label>
			</div>

			<div className={styles.radio}>
				<input
					id="round-trip"
					name="trip"
					type="radio"
					checked={selectedRadio === "round-trip"}
					onChange={() => setSelectedRadio("round-trip")}
					className={styles.radioInput}
				/>
				<label htmlFor="round-trip" className={styles.radioLabel}>
					Round Trip
				</label>
			</div>

			<div className={styles.radio}>
				<input
					id="multiple-way"
					name="trip"
					type="radio"
					checked={selectedRadio === "multiple-way"}
					onChange={() => setSelectedRadio("multiple-way")}
					className={styles.radioInput}
				/>
				<label htmlFor="multiple-way" className={styles.radioLabel}>
					Multiple way
				</label>
			</div>
		</div>
	);
};

export default Trip;
