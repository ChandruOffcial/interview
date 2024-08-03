import Heading from "../../ui/Heading/Heading";
import Row from "../../ui/Row/Row";
import Svg from "../../ui/Svg/Svg";
import styles from "./CheckBox.module.css";
import PropTypes from "prop-types";

const CheckBox = ({ id = 0, name = "", price = 0, path = "", type = "" }) => {
	return (
		<div className={styles["checkbox-wrapper-4"]}>
			<input className={styles["inp-cbx"]} id={id} type="checkbox" />
			<label className={styles["cbx"]} htmlFor={id}>
				<Row type="row" customStyle={{ alignItems: "center" }}>
					<span>
						<Svg width={12} height={10}>
							<use xlinkHref="#check"></use>
						</Svg>
					</span>
					<Row customStyle={{ paddingLeft: "10px", fontZize: "18px" }}>{name}</Row>
				</Row>
				{type === "primary" && (
					<Row type="row" customStyle={{ alignItems: "center", padding: "0rem 1rem", columnGap: "1rem" }}>
						<Heading type="h5" customStyle={{ color: "#6a6a6a", fontSize: "15px" }}>
							${price}
						</Heading>

						<img src={path} alt="" height={26} width={26} />
					</Row>
				)}
			</label>
		</div>
	);
};
CheckBox.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	price: PropTypes.number,
	path: PropTypes.string,
	type: PropTypes.string,
};

export default CheckBox;
