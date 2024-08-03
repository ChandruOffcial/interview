import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carosel.module.css";

import Slider from "react-slick";

function SampleNextArrow(props) {
	// eslint-disable-next-line react/prop-types
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				background: "#223A60",
				height: "30px",
				width: "30px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "4px",
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	// eslint-disable-next-line react/prop-types
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				background: "#223A60",
				height: "30px",
				width: "30px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "4px",
			}}
			onClick={onClick}
		/>
	);
}

function CustomArrows() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow className="nextBtn" style={{ height: "30px", width: "30px" }} />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className="slider-container">
			<Slider {...settings}>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
				<div>
					<div className={styles.box}>
						<p className={styles.boxContent}>12 JUL’24</p>
						<p className={styles.boxContent} style={{ color: "#00AC5A" }}>
							$ 4,000
						</p>
					</div>
				</div>
			</Slider>
		</div>
	);
}

export default CustomArrows;
