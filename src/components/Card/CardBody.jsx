/* eslint-disable react/prop-types */
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Row from "../../ui/Row/Row";
import Svg from "../../ui/Svg/Svg";
import styles from "./CardBody.module.css";

const CardBody = ({
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
}) => {
	return (
		<div className={styles.cardBody}>
			<div className={styles.card1}>
				<TextContainer travelStartDate={travelStartDate} travelStartTime={travelStartTime} travelStartLoc={travelStartLoc} />
				<Time durationTime={durationTime} />
				<TextContainer travelEndDate={travelEndDate} travelEndTime={travelEndTime} travelEndLoc={travelEndLoc} />
			</div>
			<div className={styles.card2}>
				<PriceContainer price={price} offer={offer} />
			</div>
			<Row type="row" customStyle={{ justifyContent: "space-between", alignItems: "center", padding: "0.5rem 1rem" }}>
				<Button customStyle={{ backgroundColor: "transparent" }}>
					<Heading type="h5" customStyle={{ color: "#000", fontSize: "1em" }}>
						{seats} seats remaining
					</Heading>
				</Button>
				<Button customStyle={{ backgroundColor: "transparent" }}>
					<Heading type="h5" customStyle={{ color: "#FD7E14", fontSize: "1em" }}>
						Partially Refundable
					</Heading>
				</Button>
				<Button customStyle={{ backgroundColor: "transparent" }}>
					<Heading type="h5" customStyle={{ color: "#482A89", fontSize: "1em" }}>
						View flight details
					</Heading>
				</Button>
			</Row>
		</div>
	);
};

function TextContainer({ travelStartDate, travelStartTime, travelStartLoc, travelEndDate, travelEndTime, travelEndLoc }) {
	return (
		<Row type="col" customClassName="textContainer" customStyle={{ rowGap: "1rem" }}>
			<Heading type="h4" customStyle={{ fontSize: "1em" }}>
				{travelStartDate || travelEndDate}
			</Heading>
			<Heading type="h3" customStyle={{ marginTop: "0.6rem" }}>
				{travelStartTime || travelEndTime}
			</Heading>
			<Heading type="h4">{travelStartLoc || travelEndLoc}</Heading>
		</Row>
	);
}

function Time({ durationTime }) {
	return (
		<Row type="center">
			<div className={styles.startPoint}></div>
			<div className={styles.timeContainer}>
				<Heading type="h6">{durationTime}</Heading>
			</div>
			<div className={styles.endPoint}>
				<div className={styles.border}></div>
				<Svg width={32} height={32} viewBox="0 0 32 32">
					<path
						d="M0.000566483 10.2922H2.37557L4.75057 13.4588H13.4589L9.50057 0.000488281L12.6672 0.000488281L20.5839 13.4588H29.2922C29.952 13.4588 30.5125 13.69 30.9737 14.1523C31.435 14.6147 31.6662 15.1752 31.6672 15.8338C31.6683 16.4925 31.4371 17.0535 30.9737 17.5169C30.5103 17.9803 29.9498 18.2109 29.2922 18.2088H20.5839L12.6672 31.6672H9.50057L13.4589 18.2088H4.75057L2.37557 21.3755H0.000566483L1.5839 15.8338L0.000566483 10.2922Z"
						fill="#7EB1E0"
					/>
				</Svg>
			</div>
		</Row>
	);
}

function PriceContainer({ price, offer }) {
	return (
		<Row type="col" customStyle={{ padding: "1rem 3rem" }}>
			<Heading type="h2">${price}</Heading>
			<Heading type="h6" customStyle={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px", color: "#00AC5A" }}>
				<span>${offer} OFF </span>{" "}
				<Svg height={14} width={14} viewBox="0 0 14 14">
					<path
						d="M12.8321 7.00044L13.5681 5.72844C13.6566 5.57541 13.6806 5.3935 13.635 5.22273C13.5894 5.05196 13.4778 4.9063 13.3248 4.81778L12.0514 4.08178V2.61511C12.0514 2.4383 11.9812 2.26873 11.8562 2.14371C11.7312 2.01868 11.5616 1.94845 11.3848 1.94845H9.91877L9.18344 0.675779C9.09463 0.523056 8.94925 0.411449 8.77877 0.365112C8.69421 0.342189 8.60595 0.336278 8.51909 0.347722C8.43223 0.359166 8.34851 0.387737 8.27277 0.431779L6.99944 1.16778L5.7261 0.431112C5.57299 0.34271 5.39102 0.318754 5.22024 0.364512C5.04946 0.410271 4.90385 0.521997 4.81544 0.675112L4.07944 1.94845H2.61344C2.43663 1.94845 2.26706 2.01868 2.14203 2.14371C2.01701 2.26873 1.94677 2.4383 1.94677 2.61511V4.08111L0.673437 4.81711C0.597459 4.86082 0.530865 4.9191 0.477481 4.98862C0.424096 5.05814 0.384975 5.13752 0.362363 5.2222C0.339752 5.30689 0.334096 5.39521 0.345722 5.48208C0.357347 5.56896 0.386023 5.65268 0.430104 5.72844L1.1661 7.00044L0.430104 8.27244C0.342097 8.42563 0.318219 8.60739 0.363676 8.77811C0.409134 8.94882 0.52024 9.09464 0.672771 9.18378L1.9461 9.91978V11.3858C1.9461 11.5626 2.01634 11.7322 2.14137 11.8572C2.26639 11.9822 2.43596 12.0524 2.61277 12.0524H4.07944L4.81544 13.3258C4.87446 13.4267 4.95873 13.5105 5.05996 13.5689C5.16118 13.6274 5.27588 13.6584 5.39277 13.6591C5.50877 13.6591 5.6241 13.6284 5.72677 13.5691L6.99877 12.8331L8.2721 13.5691C8.42518 13.6574 8.60703 13.6813 8.77775 13.6357C8.94847 13.5901 9.09413 13.4786 9.18277 13.3258L9.9181 12.0524H11.3841C11.5609 12.0524 11.7305 11.9822 11.8555 11.8572C11.9805 11.7322 12.0508 11.5626 12.0508 11.3858V9.91978L13.3241 9.18378C13.4 9.13995 13.4664 9.0816 13.5197 9.01206C13.573 8.94253 13.612 8.86318 13.6346 8.77854C13.6572 8.6939 13.6629 8.60564 13.6514 8.5188C13.6399 8.43197 13.6113 8.34825 13.5674 8.27244L12.8321 7.00044ZM5.3321 3.66044C5.59741 3.66053 5.85181 3.76601 6.03935 3.95367C6.22689 4.14133 6.33219 4.39581 6.3321 4.66111C6.33202 4.92642 6.22654 5.18082 6.03888 5.36836C5.85122 5.55589 5.59674 5.6612 5.33144 5.66111C5.06613 5.66102 4.81173 5.55555 4.62419 5.36789C4.43666 5.18022 4.33135 4.92575 4.33144 4.66044C4.33153 4.39514 4.437 4.14074 4.62466 3.9532C4.81233 3.76566 5.0668 3.66036 5.3321 3.66044ZM5.5321 10.0604L4.46544 9.26111L8.46544 3.92778L9.5321 4.72711L5.5321 10.0604ZM8.66544 10.3271C8.53407 10.3271 8.404 10.3011 8.28265 10.2508C8.1613 10.2005 8.05105 10.1268 7.95819 10.0339C7.86533 9.94096 7.79169 9.83066 7.74146 9.70928C7.69123 9.5879 7.66539 9.45781 7.66544 9.32644C7.66548 9.19508 7.6914 9.06501 7.74171 8.94366C7.79202 8.82231 7.86574 8.71206 7.95866 8.6192C8.05158 8.52634 8.16188 8.45269 8.28327 8.40246C8.40465 8.35223 8.53474 8.3264 8.6661 8.32644C8.93141 8.32653 9.18581 8.43201 9.37335 8.61967C9.56089 8.80733 9.66619 9.06181 9.6661 9.32711C9.66602 9.59242 9.56054 9.84682 9.37288 10.0344C9.18522 10.2219 8.93074 10.3272 8.66544 10.3271Z"
						fill="#00AC5A"
					/>
				</Svg>
			</Heading>
			<Button customStyle={{ marginTop: "1rem", padding: "1rem" }}>Book Now</Button>
		</Row>
	);
}
export default CardBody;
