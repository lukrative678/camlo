import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import ProductsSection from '../components/sections/ProductsSection';
import ServicesSection from '../components/sections/ServicesSection';
import MachinesSection from '../components/sections/MachinesSection';
import NewsletterSection from '../components/sections/NewsletterSection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <MachinesSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
