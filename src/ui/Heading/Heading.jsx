import styles from "./Heading.module.css";
import PropTypes from "prop-types";

const Heading = ({ children, type, customStyle = {}, customClassName = "" }) => {
	if (type === "h1") {
		return (
			<h1 className={`${styles.h1} ${styles[customClassName]}`} style={customStyle}>
				{children}
			</h1>
		);
	}
	if (type === "h2") {
		return (
			<h2 className={`${styles.h2} ${styles[customClassName]}`} style={customStyle}>
				{children}
			</h2>
		);
	}
	if (type === "h3") {
		return (
			<h3 className={`${styles.h3} ${styles[customClassName]}`} style={customStyle}>
				{children}
			</h3>
		);
	}
	if (type === "h4") {
		return (
			<h4 className={`${styles.h4} ${styles[customClassName]}`} style={customStyle}>
				{children}
			</h4>
		);
	}
	if (type === "h5") {
		return (
			<h5 className={styles.h5} style={customStyle}>
				{children}
			</h5>
		);
	}
	if (type === "h6") {
		return (
			<h6 className={`${styles.h6} ${styles[customClassName]}`} style={customStyle}>
				{children}
			</h6>
		);
	}

	return (
		<p className={`${styles.h6} ${styles[customClassName]}`} style={customStyle}>
			{children}
		</p>
	);
};
Heading.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	customStyle: PropTypes.object,
	customClassName: PropTypes.string,
};
export default Heading;
