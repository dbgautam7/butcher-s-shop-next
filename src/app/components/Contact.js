import styles from "../page.module.css";

export default function ContactUs() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Get in Touch</h2>
      <p>
        If you have any questions or need assistance, feel free to reach out to
        us:
      </p>

      <ul>
        <li>
          <strong>Phone:</strong>{" "}
          <a href="tel:+977 9869794612">+977 9869794612</a>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:sushilghimire@gmail.com">sushilghimire@gmail.com</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/9869794612"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with us on WhatsApp
          </a>
        </li>
      </ul>
    </section>
  );
}
