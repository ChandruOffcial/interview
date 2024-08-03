import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "./LayOut.module.css";
import Trip from "../ui/Trip/Trip";
import FlightSearch from "../ui/FlightSearch/Flight";

const Layout = () => {
	return (
		<div className={styles.Layout}>
			<NavBar />
			<Trip />
			<FlightSearch />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
