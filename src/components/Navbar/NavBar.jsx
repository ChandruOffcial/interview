import { NavLink } from "react-router-dom";
import Row from "../../ui/Row/Row";
import Button from "../../ui/Button/Button";
import styles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			{/* Logo */}
			<img src="/images/logo.png" alt="travel caribe" height={55} />

			{/* Links */}
			<ul className={styles.navLink}>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? `${styles.navLinkItem} ${styles.navLinkItemActive}` : `${styles.navLinkItem}`)}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? `${styles.navLinkItem} ${styles.navLinkItemActive}` : `${styles.navLinkItem}`)}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/flight"
						className={({ isActive }) => (isActive ? `${styles.navLinkItem} ${styles.navLinkItemActive}` : `${styles.navLinkItem}`)}
					>
						Flight
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/content"
						className={({ isActive }) => (isActive ? `${styles.navLinkItem} ${styles.navLinkItemActive}` : `${styles.navLinkItem}`)}
					>
						Content
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/blog"
						className={({ isActive }) => (isActive ? `${styles.navLinkItem} ${styles.navLinkItemActive}` : `${styles.navLinkItem}`)}
					>
						Blog
					</NavLink>
				</li>
			</ul>

			{/* Signin */}
			<Row type="row">
				<Button customStyle={{ backgroundColor: "transparent", color: "#283841", fontWeight: "600" }}>sign in</Button>
				<Button customStyle={{ fontWeight: "500" }}>sign up</Button>
			</Row>
		</nav>
	);
};

export default NavBar;
