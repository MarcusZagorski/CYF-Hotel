import "../footer/Footer.scss";
import footerArrays from "@/data/FooterItems";
function Footer() {
  return (
    <footer style={{ backgroundColor: "yellow" }}>
      <ul>
        {footerArrays.map((data, index) => (
          <li
            style={{
              color: "black",
            }}
            key={index}
          >
            {data}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
