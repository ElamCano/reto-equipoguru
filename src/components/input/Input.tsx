import styles from "./Input.module.css";

interface Props {
  email: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ email, handleChange }: Props) => {
  return (
    <input
      type="email"
      value={email}
      onChange={handleChange}
      className={styles.input}
      placeholder="Enter Your Email"
    />
  );
};

export default Input;
