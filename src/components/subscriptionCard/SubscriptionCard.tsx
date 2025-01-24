"use client";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./SubscriptionCard.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const SubscriptionCard = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (email.length && !emailRegex.test(email)) {
      setTimeout(() => {
        setError("Please enter a valid email.");
      }, 1000);
    } else {
      setError("");
    }
  }, [email, error]);

  const notify = () => {
    if (email.length && emailRegex.test(email)) {
      toast("You have successfully subscribed!", {
        style: {
          color: "#e6fc15",
        },
      });
      sendEmail();
    } else {
      toast("Please enter a valid email.", {
        style: {
          color: "#e6fc15",
        },
      });
    }
  };

  const sendEmail = () => {
    const templateParams = {
      to_email: email, // Correo dinámico del destinatario
    };

    // Usar emailjs para enviar el correo
    emailjs
      .send(
        "service_a6ftsu7",
        "template_7h09g7l",
        templateParams,
        "7fXe3mz4O450r9z78"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <img
          src={"/subscribe_icon.svg"}
          alt="subscribe_icon"
          width={40}
          height={40}
        />
        <h1 className={styles.title}>SUBSCRIBE</h1>
        <Input email={email} handleChange={handleChange} />
        <Button notify={notify} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default SubscriptionCard;
