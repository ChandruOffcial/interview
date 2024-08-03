/* eslint-disable react/prop-types */
import Counter from "../../components/Counter/Counter";
import styles from "./Bags.module.css";

const Bags = ({ path = "", name = "" }) => {
	return (
		<div className={styles.main}>
			<div className={styles.imgcontainer}>
				<img src={path} alt="image" />
				<p>{name}</p>
			</div>
			<Counter />
		</div>
	);
};

export default Bags;
