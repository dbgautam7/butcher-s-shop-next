import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We would love to hear from you! Reach out with any questions or
          feedback.
        </p>
      </div>
      <section className={styles.container}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={styles.textarea}
            required
          />
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
