import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>
          Learn more about The Butchers Shop and our commitment to quality.
        </p>
      </div>
      <section className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p>
          Established in 2020, The Butchers Shop has been serving the community
          with the freshest meats, eggs, and seafood. Our team is passionate
          about quality and customer satisfaction, ensuring every product meets
          the highest standards.
        </p>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        <ul>
          <li>Locally sourced products</li>
          <li>Expert butchers with years of experience</li>
          <li>Friendly and knowledgeable staff</li>
          <li>Clean and welcoming environment</li>
        </ul>
      </section>
    </div>
  );
}
