import Heading from "../../ui/Heading/Heading";
import styles from "./Footer.module.css";

const Footer = () => {
	const footerDetails = [
		{
			id: 1,
			name: "Company",
			links: ["About", "Careers", "Partnerships", "Blog", "Advertising", "How we work"],
		},
		{
			id: 2,
			name: "Company",
			links: ["Privacy", "Terms of Use", "Accessibility", "Cookies"],
		},
		{
			id: 3,
			name: "Company",
			links: ["Support", "Cancel your booking", "Refund policies", "Use a coupon", "Travel documents"],
		},
		{
			id: 4,
			name: "Company",

			links: ["Airline fees", "Airline", "Low fare trip", "Badges & Certificates"],
		},
	];
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				{/* News Letter */}
				<div className={styles.newsletter}>
					<Heading type="h6">Subscribe to our newsletter for regular updates about Offers, Coupons & more</Heading>
					<form className={styles.newsletterForm}>
						<input type="email" placeholder="Your Email Address" className={styles.newsletterInput} />
						<button type="submit" className={styles.subscribeButton} onClick={(e) => e.preventDefault()}>
							Subscribe
						</button>
					</form>
				</div>

				{/* Social Links */}
				<div className={styles.socialMedia}>
					<h3>FOLLOW US</h3>
					<div className={styles.socialIcons}>
						<span className={styles.icon}>
							<i className="fab fa-facebook-f"></i>
						</span>
						<span className={styles.icon}>
							<i className="fab fa-twitter"></i>
						</span>
						<span className={styles.icon}>
							<i className="fab fa-instagram"></i>
						</span>
						<span className={styles.icon}>
							<i className="fab fa-youtube"></i>
						</span>
						<span className={styles.icon}>
							<i className="fab fa-linkedin-in"></i>
						</span>
					</div>
				</div>

				{/* Page Link */}

				{footerDetails &&
					footerDetails.map((item) => (
						<div className={styles.footerColumn} key={item.id}>
							<h3>{item.name}</h3>
							<ul>
								{item?.links.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
					))}
			</div>
		</footer>
	);
};

export default Footer;
