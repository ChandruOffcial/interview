import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Flights from "./pages/Flights";
import Content from "./pages/Content";
import Blog from "./pages/Blog";
import styles from "./App.module.css";
import Layout from "./Layout/Layout";

function App() {
	return (
		<div className={styles.container}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="flight" element={<Flights />} />
					<Route path="content" element={<Content />} />
					<Route path="blog" element={<Blog />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
