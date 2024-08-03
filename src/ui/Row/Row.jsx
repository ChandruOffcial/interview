import styles from "./Row.module.css";
import PropTypes from "prop-types";

const Row = ({ children, type, customStyle }) => {
	return (
		<div className={styles[type]} style={customStyle}>
			{children}
		</div>
	);
};

Row.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	customStyle: PropTypes.object,
};
export default Row;
