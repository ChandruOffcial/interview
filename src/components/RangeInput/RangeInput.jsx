/* eslint-disable react/prop-types */
import styles from "./RangeInput.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import ReactSlider from "react-slider";
import Row from "../../ui/Row/Row";
import Heading from "../../ui/Heading/Heading";

const RangeInput = ({ min = 0, max = 100, step = 1, defaultValue = [], type = "", heading = "" }) => {
	const [values, setValues] = useState(defaultValue);
	const handleChange = (newValues) => setValues(newValues);

	return (
		<div className={styles.mainTrack}>
			{type === "time" && (
				<div className={styles.heading}>
					{heading}{" "}
					<span className={styles.duration}>
						{min} - {max} hours
					</span>
				</div>
			)}

			<div className={styles.dotTrack} style={type === "time" ? { top: "30px" } : { top: "1px" }}>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
			</div>
			<ReactSlider
				className={styles.slider}
				value={values}
				step={step}
				onChange={handleChange}
				min={min}
				max={max}
				trackClassName="example-track"
			/>
			<Row type="row" customStyle={{ justifyContent: "space-between", padding: "13px 0px" }}>
				<Heading type="h5" customStyle={{ fontSize: "12px" }}>
					{type === "time" ? `${values[0]} Hrs` : `$ ${values[0]}`}
				</Heading>
				<Heading type="h5" customStyle={{ fontSize: "12px" }}>
					{type === "time" ? `${values[1]} Hrs` : `$ ${values[1]}`}
				</Heading>
			</Row>
		</div>
	);
};

RangeInput.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
};
export default RangeInput;
