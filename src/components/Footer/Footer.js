import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <ul>
          <li>
            <a href="/contact" className="footer-a">
              Contactactanos
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/f" className="footer-a">
              Donde encontrarnos
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/a" className="footer-a">
              Quienes somos
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
