import { services } from "@/data/services";
import styles from "../page.module.css"; // Import the new services.css file

export default function Services() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <p>
        At The Butchers Shop, we pride ourselves on offering a wide range of
        services to meet all your meat needs. Whether you&apos;re hosting a
        large event or just want a fresh cut for dinner, we have the right
        options for you. Our team of experts is dedicated to providing the
        highest quality products and services. From custom meat cutting and home
        delivery to specialty products like organic and halal meats, we ensure
        satisfaction at every step.
      </p>
      <h3 className={styles.sectionTitle}>What We Offer</h3>
      <ol>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ol>
    </section>
  );
}
