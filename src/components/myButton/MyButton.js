import styles from "./MyButton.module.css";

export default function MyButton(props) {
  return (
    <div onClick={props.fn()} className={styles.btn}>
      <p>Book a call</p>
    </div>
  );
}
