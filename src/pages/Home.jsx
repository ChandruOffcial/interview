import Card from "../components/Card/Card";
import CustomArrows from "../components/Carousel/Carosel";
import { SideBar } from "../components/Sidebar/SideBar";
import Button from "../ui/Button/Button";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<main className={styles.main}>
			<div style={{ width: "30%" }}>
				<SideBar />
			</div>
			<div className={styles.details} style={{ width: "69%" }}>
				<div className={styles.arrow}>
					<CustomArrows />
				</div>

				<div className={styles.btnGroupContainer}>
					<div className={styles.btnGroup}>
						<Button type="group" path="/images/btn4.png" heading="Recommended" content="$500 - 10h 20m " />
						<Button type="group" path="/images/btn3.png" heading="CHEAPEST" content="$500 - 10h 20m " />
						<Button type="group" path="/images/btn2.png" heading="FASTEST" content="$500 - 10h 20m " />
						<Button
							type="group"
							path="/images/btn1.png"
							heading="Price Calender"
							content="$500 - 10h 20m "
							customStyle={{ backgroundColor: "#369F5A" }}
						/>
					</div>
					<p className={styles.para}>Flights sorted by discounted fares</p>
				</div>
				<Card />
				<Card />
				<Card />
			</div>
		</main>
	);
};

export default Home;
