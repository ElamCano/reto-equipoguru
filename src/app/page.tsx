import SubscriptionCard from "@/components/subscriptionCard/SubscriptionCard";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <section className={styles.page}>
      <SubscriptionCard />
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
}
