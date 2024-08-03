import Bags from "../../ui/Bags/Bags";
import Border from "../../ui/Border/Border";
import SelectBtn from "../../ui/Select/SelectBtn";
import CheckBox from "../Checkbox/CheckBox";
import RangeInput from "../RangeInput/RangeInput";
import SideBarItem from "./SideBarItem";

import styles from "./SideBarMain.module.css";

const SIDEBAR_DATA = [
	{ id: 1, name: "ABC Air Technologies", price: 130, path: "/images/img1.png", type: "primary" },
	{ id: 2, name: "Emirates Airlines", price: 240, path: "/images/img1.png", type: "primary" },
	{ id: 3, name: "Qatar Airlines", price: 240, path: "/images/img1.png", type: "primary" },
	{ id: 4, name: "Etihad Airlines", price: 475, path: "/images/img1.png", type: "primary" },
];
const timeSlots = [
	{ content: "12PM-6PM", path: "/images/arv1.png" },
	{ content: "After 6PM", path: "/images/arv2.png" },
	{ content: "12PM-6PM", path: "/images/arv3.png" },
	{ content: "After 6PM", path: "/images/arv4.png" },
];
const stops = [
	{ type: "normal", content: "Non-Stop" },
	{ type: "normal", content: "1 Stop" },
	{ type: "normal", content: "2 Stop" },
	{ type: "normal", content: "3 Stop" },
];

const Connections = [
	{
		id: 1,
		name: "Self-transfer to different station/airport",
	},
	{
		id: 2,
		name: "Allow return from a different station/airport",
	},
	{
		id: 3,
		name: "Allow return to a different station/airport",
	},
];

export const SideBar = () => {
	return (
		<aside className={styles.aside}>
			<div className={styles.title}>
				Filters
				<span className={styles.span}>Showing 86 flight</span>
			</div>
			<Border />

			<SideBarItem title={"Preferred Airliness"}>
				{SIDEBAR_DATA.map((item) => (
					<CheckBox id={item.id} name={item.name} price={item.price} path={item.path} type={item.type} key={item.id} />
				))}
			</SideBarItem>

			<SideBarItem title={"Stops"}>
				<div className={styles.step}>
					{stops.map((stop, index) => (
						<SelectBtn key={index} type={stop.type} content={stop.content} />
					))}
				</div>
			</SideBarItem>

			<SideBarItem title={"Price"}>
				<RangeInput defaultValue={[25, 56]} min={0} max={100} />
			</SideBarItem>

			<SideBarItem title={"Onward Duration"}>
				<RangeInput defaultValue={[0, 100]} min={0} max={100} />
			</SideBarItem>

			<SideBarItem title={"Departure"}>
				<div className={styles.step}>
					<SelectBtn type="icon" content="12PM-6PM" path="/images/dis.png" />
					<SelectBtn type="icon" content="After 6PM" path="/images/dis2.png" />
				</div>
			</SideBarItem>

			<SideBarItem title={"Arrival"}>
				<div className={styles.step}>
					{timeSlots.map((slot, index) => (
						<SelectBtn key={index} type="icon" content={slot.content} path={slot.path} />
					))}
				</div>
			</SideBarItem>

			<SideBarItem title={"Bags"}>
				<Bags name="Cabin Baggage" path="/images/bag1.png" />
				<Bags name="Checked baggage" path="/images/bag2.png" />
			</SideBarItem>
			<SideBarItem title={"Connections"}>
				{Connections.map((item) => (
					<CheckBox id={item.id} name={item.name} key={item.id} />
				))}
			</SideBarItem>
			<SideBarItem title={"Duration"}>
				<RangeInput defaultValue={[25, 56]} min={0} max={100} type="time" heading="Max Travel time" />
				<RangeInput defaultValue={[15, 80]} min={0} max={100} type="time" heading="Stopover" />
			</SideBarItem>
		</aside>
	);
};
