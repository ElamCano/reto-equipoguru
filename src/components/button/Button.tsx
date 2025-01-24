import styles from "./Button.module.css";

interface Props {
  notify: () => void;
}
const Button = ({ notify }: Props) => {
  return (
    <>
      <button className={styles.button} onClick={notify}>
        SUBSCRIBE
      </button>
    </>
  );
};

export default Button;
