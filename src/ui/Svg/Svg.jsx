import PropTypes from "prop-types";
import styles from "./Svg.module.css";

const Svg = ({ children, height, width, viewBox }) => {
	return (
		<svg width={height} height={width} className={styles.svg} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
			{children}
		</svg>
	);
};
Svg.propTypes = {
	children: PropTypes.node,
	height: PropTypes.number,
	width: PropTypes.number,
	viewBox: PropTypes.string,
};
export default Svg;
