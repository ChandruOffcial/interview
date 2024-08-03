import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./InputCheckBox.module.css";

const InputCheckBox = ({ children }) => {
	const [checked, setCheced] = useState(false);

	return (
		<label className={`${styles.btn} ${!checked ? styles.normal : styles.check}`}>
			<input type="checkbox" hidden={true} checked={false} onChange={() => setCheced(!checked)} className={styles.check} />
			{children}
		</label>
	);
};
InputCheckBox.propTypes = {
	children: PropTypes.node,
};

export default InputCheckBox;
