/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import styles from "./SideBar.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const SideBarItem = ({ title, children }) => {
	const [show, setShow] = useState(true);
	const contentRef = useRef(null);
	const [contentHeight, setContentHeight] = useState(0);

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [show]);

	return (
		<div style={{ margin: "1rem 0rem" }}>
			<div className={styles.titlecontainer}>
				<p className={styles.title} style={{ marginBottom: "0.6rem" }}>
					{title}
				</p>
				{!show ? <FaAngleDown onClick={() => setShow(!show)} /> : <FaAngleUp onClick={() => setShow(!show)} />}
			</div>
			<div ref={contentRef} className={`${styles.content} ${show ? styles.show : ""}`} style={{ height: show ? `${contentHeight}px` : "0" }}>
				{children}
			</div>
		</div>
	);
};

export default SideBarItem;
