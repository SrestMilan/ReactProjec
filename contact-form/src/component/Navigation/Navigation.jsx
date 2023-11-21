import styles from "./Navigation.module.css";
import image1 from "E:/ReactProjec/contact-form/src/assets/logo.png";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation}`}>
      <div className="logo">
        <img src={image1} alt="do some coding logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>
    </nav>
  );
};

export default Navigation;
