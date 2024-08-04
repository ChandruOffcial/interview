/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Button = ({ children, onClick, type = "", customStyle = {}, path = "", content = "", heading = "" }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleMouseDown = () => {
		setIsClicked(true);
	};

	const handleMouseUp = () => {
		setIsClicked(false);
		if (onClick) onClick();
	};

	const btnClass = `${styles.btn} ${isClicked ? styles.clicked : ""}`;

	if (type === "primary") {
		return (
			<button className={`${btnClass} ${styles.primary}`} style={customStyle} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
				{children}
			</button>
		);
	}
	if (type === "success") {
		return (
			<button className={`${btnClass} ${styles.success}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
				{children}
			</button>
		);
	}
	if (type === "sm") {
		return (
			<button className={`${btnClass} ${styles.sm}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
				{children}
			</button>
		);
	}

	if (type === "group") {
		return (
			<button className={`${btnClass} ${styles.group}`} style={customStyle} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
				<div className={styles.btnGroup}>
					<img src={path} alt={heading} />
					<div>
						<p className={styles.btnHeading}>{heading}</p>
						<p className={styles.btnCon}>{content}</p>
					</div>
				</div>
			</button>
		);
	}

	return (
		<button className={btnClass} style={customStyle} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	type: PropTypes.string,
	customStyle: PropTypes.object,
	path: PropTypes.string,
	content: PropTypes.string,
	heading: PropTypes.string,
};

export default Button;
