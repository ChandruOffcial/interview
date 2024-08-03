/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./SelectBtn.module.css";

const SelectBtn = ({ type = "", content = "", path = "", height = 24 }) => {
	const [active, setActive] = useState(false);

	if (type === "normal") {
		return (
			<div
				className={`${style.btn} ${style.normal}`}
				onClick={() => setActive(!active)}
				style={!active ? { backgroundColor: "#CFE0FD", color: "#223A60" } : { backgroundColor: "#223A60", color: "#CFE0FD" }}
			>
				{content}
			</div>
		);
	}

	if (type === "icon") {
		return (
			<div
				className={`${style.btn} ${style.icon}`}
				onClick={() => setActive(!active)}
				style={!active ? { backgroundColor: "#CFE0FD", color: "#223A60" } : { backgroundColor: "#223A60", color: "#CFE0FD" }}
			>
				<img src={path} alt="image" height={height} />
				<p style={{ fontSize: "12px" }}>{content}</p>
			</div>
		);
	}

	return <div>SelectBtn</div>;
};

export default SelectBtn;
