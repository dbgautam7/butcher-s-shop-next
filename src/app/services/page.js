import styles from "../page.module.css";

export default function Services() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.subtitle}>
          Discover the range of services we offer at The Butchers Shop.
        </p>
      </div>
      <section className={styles.container}>
        <h2 className={styles.sectionTitle}>What We Offer</h2>
        <ul>
          <li>Custom meat cutting and preparation</li>
          <li>Bulk orders for events and restaurants</li>
          <li>Home delivery service</li>
          <li>Specialty products: organic, halal, and more</li>
          <li>Expert advice on cooking and storage</li>
        </ul>
      </section>
    </div>
  );
}
