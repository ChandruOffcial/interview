import Card from "../components/Card/Card";
import CustomArrows from "../components/Carousel/Carosel";
import { SideBar } from "../components/Sidebar/SideBar";
import Button from "../ui/Button/Button";
import FlightSearch from "../ui/FlightSearch/Flight";
import Trip from "../ui/Trip/Trip";
import styles from "./Home.module.css";

const cardData = [
	{
		id: 0,
		airlineName: "ABC Airline",
		airlinePath: "./images/img1.png",
		travelClss: "Economy",
		seats: 100,
		travelStartDate: "Sun, 29 Jan 2023",
		travelStartTime: "14.50",
		travelStartLoc: "Moi Intl, Mombasa Kenya",
		travelEndDate: "Sun, 29 Jan 2023",
		travelEndTime: "14.50",
		travelEndLoc: "Moi Intl, Mombasa Kenya",
		durationTime: "9hr 50min",
		price: "18,500",
		offer: 500,
	},
	{
		id: 1,
		airlineName: "XYZ Airline",
		airlinePath: "./images/img2.png",
		travelClss: "Business",
		seats: 50,
		travelStartDate: "Mon, 30 Jan 2023",
		travelStartTime: "09.00",
		travelStartLoc: "JFK Intl, New York USA",
		travelEndDate: "Mon, 30 Jan 2023",
		travelEndTime: "18.30",
		travelEndLoc: "Heathrow, London UK",
		durationTime: "7hr 30min",
		price: "45,000",
		offer: 1000,
	},
	{
		id: 2,
		airlineName: "LMN Airline",
		airlinePath: "./images/img1.png",
		travelClss: "First Class",
		seats: 20,
		travelStartDate: "Tue, 31 Jan 2023",
		travelStartTime: "12.00",
		travelStartLoc: "Changi Intl, Singapore",
		travelEndDate: "Tue, 31 Jan 2023",
		travelEndTime: "20.00",
		travelEndLoc: "Narita Intl, Tokyo Japan",
		durationTime: "8hr 00min",
		price: "60,000",
		offer: 1500,
	},
	{
		id: 3,
		airlineName: "PQR Airline",
		airlinePath: "./images/img2.png",
		travelClss: "Economy",
		seats: 120,
		travelStartDate: "Wed, 01 Feb 2023",
		travelStartTime: "06.30",
		travelStartLoc: "Indira Gandhi Intl, New Delhi India",
		travelEndDate: "Wed, 01 Feb 2023",
		travelEndTime: "14.00",
		travelEndLoc: "Dubai Intl, Dubai UAE",
		durationTime: "3hr 30min",
		price: "25,000",
		offer: 750,
	},
	{
		id: 4,
		airlineName: "DEF Airline",
		airlinePath: "./images/img1.png",
		travelClss: "Business",
		seats: 60,
		travelStartDate: "Thu, 02 Feb 2023",
		travelStartTime: "20.00",
		travelStartLoc: "Sydney Intl, Sydney Australia",
		travelEndDate: "Fri, 03 Feb 2023",
		travelEndTime: "04.30",
		travelEndLoc: "Los Angeles Intl, Los Angeles USA",
		durationTime: "15hr 30min",
		price: "50,000",
		offer: 2000,
	},
];

const Home = () => {
	return (
		<>
			<Trip />
			<FlightSearch />
			<main className={styles.main}>
				<div style={{ width: "28%" }}>
					<SideBar />
				</div>
				<div className={styles.details} style={{ width: "70%" }}>
					<div className={styles.arrow}>
						<CustomArrows />
					</div>

					<div className={styles.btnGroupContainer}>
						<div className={styles.btnGroup}>
							<Button
								type="group"
								path="/images/btn4.png"
								heading="Recommended"
								content="$500 - 10h 20m "
								customStyle={{ maxWidth: "13rem" }}
							/>
							<Button type="group" path="/images/btn3.png" heading="CHEAPEST" content="$500 - 10h 20m " customStyle={{ maxWidth: "13rem" }} />
							<Button type="group" path="/images/btn2.png" heading="FASTEST" content="$500 - 10h 20m " customStyle={{ maxWidth: "13rem" }} />
							<Button
								type="group"
								path="/images/btn1.png"
								heading="Price Calender"
								content="$500 - 10h 20m "
								customStyle={{ backgroundColor: "#369F5A", maxWidth: "13rem" }}
							/>
						</div>
						<p className={styles.para}>Flights sorted by discounted fares</p>
					</div>
					{cardData && cardData.slice(0, 2).map((item) => <Card key={item.id} data={item} />)}
				</div>
			</main>
		</>
	);
};

export default Home;
