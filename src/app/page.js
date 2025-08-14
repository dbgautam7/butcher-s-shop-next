import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import Product from "./components/Product";
import Services from "./components/Services";

export default function Home() {
  return (
    <section className="container">
      <Product />
      <Services />
      <AboutUs />
      <ContactUs />
    </section>
  );
}
