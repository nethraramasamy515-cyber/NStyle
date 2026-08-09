import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import CustomerReviews from "../components/CustomerReviews";
import BestSellers from "../components/BestSellers";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Categories />

      <FeaturedProducts />

      <BestSellers />

      <NewArrivals />

      <WhyChooseUs />

      <CustomerReviews />

      <Newsletter />

      <Footer />
    </>
  );
}

export default Home;