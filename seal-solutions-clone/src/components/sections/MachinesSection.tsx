interface MachineItemProps {
  image: string;
  title: string;
}

const MachineItem = ({ image, title }: MachineItemProps) => {
  return (
    <div className="machine-category">
      <img src={image} alt={title} className="machine-category-image" />
      <div className="machine-category-label">{title}</div>
    </div>
  );
};

const MachinesSection = () => {
  const machines = [
    {
      title: 'EXCAVATOR',
      image: 'https://ext.same-assets.com/855002558/88636896.jpeg'
    },
    {
      title: 'BACKHOE-LOADER',
      image: 'https://ext.same-assets.com/855002558/2830782942.jpeg'
    },
    {
      title: 'LOADER',
      image: 'https://ext.same-assets.com/855002558/1187401831.jpeg'
    },
    {
      title: 'DOZZER',
      image: 'https://ext.same-assets.com/855002558/3951778001.jpeg'
    },
    {
      title: 'BULL DOZZER',
      image: 'https://ext.same-assets.com/855002558/1113494643.jpeg'
    },
    {
      title: 'CRANE',
      image: 'https://ext.same-assets.com/855002558/2729991000.jpeg'
    },
    {
      title: 'FORKLIFT',
      image: 'https://ext.same-assets.com/855002558/1272205701.jpeg'
    }
  ];

  return (
    <section className="machines-section py-12 bg-gray-100">
      <div className="container-custom">
        <h2 className="section-title">APPLICATION FOR THESE MACHINES</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {machines.map((machine, index) => (
            <MachineItem
              key={index}
              title={machine.title}
              image={machine.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachinesSection;
