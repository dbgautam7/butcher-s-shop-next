import Image from "next/image";
import "../../styles/card.css";

export default function Card() {
  return (
    <div className="productGrid">
      <div className="productCard">
        <Image
          src="/images/meat.jpg"
          alt="Fresh Meat"
          height={200}
          width={250}
          className="productImage"
        />
        <h3>Fresh Meat</h3>
        <p>High quality fresh meat for all your needs.</p>
        <p className="price">$12.99</p>
      </div>
      <div className="productCard">
        <Image
          src="/images/chicken.jpg"
          alt="Frozen Chicken"
          height={200}
          width={250}
          className="productImage"
        />
        <h3>Frozen Chicken</h3>
        <p>Frozen chicken packs for longer shelf life.</p>
        <p className="price">$9.99</p>
      </div>
      <div className="productCard">
        <Image
          src="/images/egg.jpg"
          alt="Fresh Eggs"
          height={200}
          width={250}
          className="productImage"
        />
        <h3>Fresh Eggs</h3>
        <p>Farm-fresh eggs for breakfast and recipes.</p>
        <p className="price">$4.99</p>
      </div>
      <div className="productCard">
        <Image
          src="/images/fish.jpg"
          alt="Frozen Fish"
          height={200}
          width={250}
          className="productImage"
        />
        <h3>Frozen Fish</h3>
        <p>Frozen fish for all your seafood needs.</p>
        <p className="price">$8.99</p>
      </div>
    </div>
  );
}
