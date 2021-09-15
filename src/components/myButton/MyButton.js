import styles from "./MyButton.module.css";

export default function MyButton(props) {
  return (
    <div
      style={{ width: props.widthP, heightP: props.heightP }}
      onClick={props.fn()}
      className={styles.btn}
    >
      <p style={{ fontSize: props.fontP }}>Book a call</p>
    </div>
  );
}
