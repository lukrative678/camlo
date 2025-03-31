import Carousel from '../ui/Carousel';

const Hero = () => {
  const sliderImages = [
    'https://ext.same-assets.com/855002558/4264379276.jpeg',
    'https://ext.same-assets.com/855002558/3990966816.jpeg',
    'https://ext.same-assets.com/855002558/4223524038.jpeg',
    'https://ext.same-assets.com/855002558/3649639650.jpeg',
    'https://ext.same-assets.com/855002558/513401371.jpeg',
    'https://ext.same-assets.com/855002558/2906812529.jpeg'
  ];

  return (
    <section className="hero">
      <Carousel images={sliderImages} />
    </section>
  );
};

export default Hero;
