import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © 2025 Subscribe Form. All Rigths Reserved. Design by{" "}
      <a href="https://equipo.guru/" className={styles.link} target="_blank">
        EquipoDotGuru
      </a>
      .
    </footer>
  );
};

export default Footer;
