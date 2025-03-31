import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const ProductCard = ({ title, image, description, link }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <Link to={link} className="text-primary hover:underline font-semibold block text-right">
          Read More
        </Link>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const products = [
    {
      title: 'O-Rings, Quad Rings and Back Up Washers',
      image: 'https://ext.same-assets.com/855002558/2492950149.jpeg',
      description: 'Did you know the 1986 Space Shuttle Challenger Disaster was caused by a failed O..',
      link: '/product/o-rings-quad-rings-and-back-up-washers'
    },
    {
      title: 'Seal Kits',
      image: 'https://ext.same-assets.com/855002558/2975009975.jpeg',
      description: 'We also have a range of storage and transport accessories available..',
      link: '/product/heavy-duty-wheel-chocks'
    },
    {
      title: 'Dowty Seals / Bonded Washers',
      image: 'https://ext.same-assets.com/855002558/3658303388.jpeg',
      description: 'Seal Solutions Australia stock metric and imperial self centering and standard bonded washers / d..',
      link: '/product/dowty-sealsbonded-washers'
    },
    {
      title: 'EZI-Glide Bushes (DU Bush)',
      image: 'https://ext.same-assets.com/855002558/2702440086.jpeg',
      description: 'SELF LUBRICATING BUSHING (PTFE MATERIAL) Dry Good, Oiled Good, Gre..',
      link: '/product/ezi-glide-bushes'
    },
    {
      title: 'Custom Machining Profile Chart',
      image: 'https://ext.same-assets.com/855002558/2043439688.png',
      description: 'Custom Machined Seals Profile Chart Seal Solutions Australia also offer Custom Machining o..',
      link: '/product/machining-profiles-chart'
    },
    {
      title: 'Pressure Gauges',
      image: 'https://ext.same-assets.com/855002558/3079981319.jpeg',
      description: 'Seal Solutions Australia supply glycerine filled pressure gauges and digital gauges. The glycerine f..',
      link: '/product/pressure-gauges-digital'
    }
  ];

  return (
    <section className="products-section py-12 bg-gray-100">
      <div className="container-custom">
        <h2 className="section-title">OUR PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              image={product.image}
              description={product.description}
              link={product.link}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <button className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full focus:outline-none hover:bg-primary hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full focus:outline-none hover:bg-primary hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
