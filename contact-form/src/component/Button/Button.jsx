import styles from "./Button.module.css";
const Button = ({ isOutline, text }) => {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {text}
    </button>
  );
};

export default Button;
