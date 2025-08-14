import Image from "next/image";
import styles from "../page.module.css";
import { products } from "@/data/products";

export default function Product() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Products</h2>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div className={styles.productCard} key={index}>
            <Image
              src={product.src}
              alt={product.alt}
              height={200}
              width={250}
              className="productImage"
            />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
