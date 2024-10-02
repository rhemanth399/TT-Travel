import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We provide the best services for car and bus rentals in Tirupati. Affordable rates, reliable service.</p>
        </div>

        

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <a href="tel: +91 9391711883">
          <p><i className="fa fa-phone"></i> +91 9391711883</p>
          </a>
          <p><i className="fa fa-envelope"></i> info@tttravels.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 TT Travels & Tours Tirupati | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
