import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.newsletter}>
				<h2>Subscribe to our newsletter for regular updates about Offers, Coupons & more</h2>
				<form className={styles.newsletterForm}>
					<input type="email" placeholder="Your Email Address" className={styles.newsletterInput} />
					<button type="submit" className={styles.subscribeButton}>
						Subscribe
					</button>
				</form>
			</div>
			<div className={styles.footerLinks}>
				<div className={styles.footerColumn}>
					<h3>Company</h3>
					<ul>
						<li>About</li>
						<li>Careers</li>
						<li>Partnerships</li>
						<li>Blog</li>
						<li>Advertising</li>
						<li>How we work</li>
					</ul>
				</div>
				<div className={styles.footerColumn}>
					<h3>Policies</h3>
					<ul>
						<li>Privacy</li>
						<li>Terms of Use</li>
						<li>Accessibility</li>
						<li>Cookies</li>
					</ul>
				</div>
				<div className={styles.footerColumn}>
					<h3>Help</h3>
					<ul>
						<li>Support</li>
						<li>Cancel your booking</li>
						<li>Refund policies</li>
						<li>Use a coupon</li>
						<li>Travel documents</li>
					</ul>
				</div>
				<div className={styles.footerColumn}>
					<h3>More</h3>
					<ul>
						<li>Airline fees</li>
						<li>Airlines</li>
						<li>Low fare trips</li>
						<li>Badges & Certificates</li>
					</ul>
				</div>
			</div>
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
		</footer>
	);
};

export default Footer;
