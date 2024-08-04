import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "./LayOut.module.css";

const Layout = () => {
	return (
		<div className={styles.Layout}>
			<NavBar />

			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
