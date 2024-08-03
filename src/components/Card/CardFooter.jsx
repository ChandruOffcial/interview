import Button from "../../ui/Button/Button";
import Row from "../../ui/Row/Row";
import styles from "./CardFooter.module.css";
import PropTypes from "prop-types";
const CardFooter = () => {
	return (
		<div className={styles.footer}>
			<Row type="row" customStyle={{ columnGap: "10px" }}>
				<PackingItem imagePath="./images/bag.png" content="Separate tickets booked together for cheaper price" />
				<PackingItem imagePath="./images/footer2.png" content="Change of Terminal" />
				<PackingItem imagePath="./images/footer3.png" content="Self Transfer" />
				<PackingItem imagePath="./images/footer4.png" content="7kg" />
				<PackingItem imagePath="./images/footer5.png" content="0" />
				<PackingItem imagePath="./images/footer6.png" content="1" />
			</Row>
			<Button type="sm">Cheapest</Button>
		</div>
	);
};

function PackingItem({ imagePath, content }) {
	return (
		<Row type="row" customStyle={{ alignItems: "center", columnGap: "10px" }}>
			<img src={imagePath} alt="Bag" height={20} width={20} />

			<p>{content}</p>
		</Row>
	);
}

PackingItem.propTypes = {
	imagePath: PropTypes.string,
	content: PropTypes.string,
};
export default CardFooter;
