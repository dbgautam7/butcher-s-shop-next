import styles from "../page.module.css";
import { AboutUsData } from "@/data/about";

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Story</h2>
      <p>
        Established in 2020, The Butchers Shop has been serving the community
        with the freshest meats, eggs, and seafood. Our team is passionate about
        quality and customer satisfaction, ensuring every product meets the
        highest standards.
      </p>
      <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
      <ol>
        {AboutUsData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  );
}
