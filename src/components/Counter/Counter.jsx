import { useState } from "react";
import Row from "../../ui/Row/Row";
import styles from "./Counter.module.css";

const Counter = () => {
	const [count, setCount] = useState(0);

	const isDisable = count <= 0 ? true : false;
	return (
		<Row type="row" customStyle={{ gap: "10px" }}>
			<button className={styles.count} onClick={() => setCount((pre) => pre - 1)} disabled={isDisable}>
				&minus;
			</button>
			<p className={styles.countValue}>{count}</p>
			<button className={styles.count} onClick={() => setCount((pre) => pre + 1)}>
				+
			</button>
		</Row>
	);
};

export default Counter;
