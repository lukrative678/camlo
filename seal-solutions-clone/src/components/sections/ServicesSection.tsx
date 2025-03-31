import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="services-section py-12 bg-white">
      <div className="container-custom">
        <h2 className="section-title">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-700">
            <p className="mb-4">
              Seal Solutions Australia can also facilitate many of your hydraulic, pneumatic
              and industrial needs, as we provide the following services in addition to our huge range of seals-
            </p>
            <Link to="/services" className="btn-primary">
              READ MORE
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="https://ext.same-assets.com/855002558/1246764333.jpeg"
              alt="Hydraulic Cylinders"
              className="max-w-full rounded-lg shadow-md border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
