/* eslint-disable react/prop-types */
import Heading from "../../ui/Heading/Heading";
import Row from "../../ui/Row/Row";
import Svg from "../../ui/Svg/Svg";
import styles from "./Card.module.css";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const Card = ({ data }) => {
	const {
		id,
		airlineName,
		airlinePath,
		travelClss,
		seats,
		travelStartDate,
		travelStartTime,
		travelStartLoc,
		travelEndDate,
		travelEndTime,
		travelEndLoc,
		durationTime,
		price,
		offer,
	} = data;
	return (
		<div className={styles.cardContainer} id={id}>
			{/* Card Head */}
			<Row type="row" customStyle={{ justifyContent: "space-between", alignItems: "center" }}>
				<Row type="row" customStyle={{ alignItems: "center", columnGap: "10px" }}>
					<img src={airlinePath} alt={airlineName} height={30} />
					<Heading type="h4" customStyle={{ fontWeight: 600 }}>
						{airlineName}
					</Heading>
				</Row>
				<Row type="row" customStyle={{ alignItems: "center" }}>
					<Svg height={25} width={25} viewBox="0 0 30 30">
						<path
							d="M20.6795 4.6875C16.8756 4.6875 15.0006 8.4375 15.0006 8.4375C15.0006 8.4375 13.1256 4.6875 9.32169 4.6875C6.23029 4.6875 3.78224 7.27383 3.7506 10.36C3.68615 16.766 8.83243 21.3217 14.4733 25.1502C14.6288 25.256 14.8125 25.3126 15.0006 25.3126C15.1887 25.3126 15.3724 25.256 15.5279 25.1502C21.1682 21.3217 26.3145 16.766 26.2506 10.36C26.219 7.27383 23.7709 4.6875 20.6795 4.6875V4.6875Z"
							stroke="#4C4850"
							strokeWidth="2.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</Svg>
					<Heading type="h4" customStyle={{ paddingLeft: "10px", fontFamily: "Segoe UI" }}>
						Travel Class: <span style={{ fontWeight: 600 }}>{travelClss}</span>
					</Heading>
				</Row>
			</Row>

			{/* Card Body */}
			<CardBody
				seats={seats}
				travelStartDate={travelStartDate}
				travelStartTime={travelStartTime}
				travelStartLoc={travelStartLoc}
				travelEndDate={travelEndDate}
				travelEndTime={travelEndTime}
				travelEndLoc={travelEndLoc}
				durationTime={durationTime}
				price={price}
				offer={offer}
			/>

			<div className={styles.dashBorder}>
				<div className={styles.dash}></div>
			</div>

			{/* Card Footer */}
			<CardFooter />
		</div>
	);
};

export default Card;
