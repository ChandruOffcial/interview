/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ children, onClick, type = "", customStyle = {}, path = "", content = "", heading = "" }) => {
	if (type === "primary") {
		return (
			<button className={`${styles.btn} ${styles.primary}`} style={customStyle}>
				{children}
			</button>
		);
	}
	if (type === "success") {
		return <button className={`${styles.btn} ${styles.success}`}>{children}</button>;
	}
	if (type === "sm") {
		return <button className={`${styles.btn} ${styles.sm}`}>{children}</button>;
	}

	if (type === "group") {
		return (
			<button className={`${styles.btn} ${styles.group}`} style={customStyle} onClick={onClick}>
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
		<button className={styles.btn} style={customStyle} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	type: PropTypes.string,
	customStyle: PropTypes.object,
};

export default Button;
