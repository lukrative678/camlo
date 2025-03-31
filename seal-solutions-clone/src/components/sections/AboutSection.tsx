import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="about-section py-12 bg-white">
      <div className="container-custom">
        <h2 className="section-title">SEAL SOLUTIONS AUSTRALIA</h2>
        <div className="bg-accent text-white text-center py-2 mb-6 font-semibold">
          Your Complete Seals Specialist
        </div>
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            Seal Solutions Australia is an Australian company specialising in high quality Hydraulic and Pneumatic seals sourced from global suppliers & manufacturers such as SKF, Hallite, NOK, DLI, CR.
            Seal Solutions Australia also manufacture the highest quality parts, to service Industries operating in Earthmoving & Mechanical, Drilling, Hydraulics, Agricultural, Oil & Gas, Mining, Marine,
            Transport and General Engineering.
          </p>
          <p className="mb-4">
            Our ever increasing range of parts also include custom machining of Hydraulic & Pneumatic Seals, O-Rings, Gaskets, Pump Packing, Komatsu & Caterpillar Seal Kits,
            Polyurethane Mouldings, Engineering Plastic wear products. Agricultural Cylinders and Heavy Duty Wheel Chocks compliment our diverse product range.
          </p>
        </div>
        <div className="text-center mt-6">
          <Link to="/about-us" className="btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
