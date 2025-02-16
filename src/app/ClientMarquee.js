import Image from "next/image";

const ClientMarquee = () => {
  const clients = [
    { name: "Client 1", logo: "/clients/img1.png" },
    { name: "Client 2", logo: "/clients/img2.png" },
    { name: "Client 3", logo: "/clients/img3.png" },
    { name: "Client 5", logo: "/clients/img5.png" },
    { name: "Client 6", logo: "/clients/img6.png" },
    { name: "Client 7", logo: "/clients/img7.png" },
    { name: "Client 8", logo: "/clients/img8.png" },
    { name: "Client 9", logo: "/clients/img9.png" },
    { name: "Client 10", logo: "/clients/img10.png" },
    { name: "Client 11", logo: "/clients/img11.png" },
  ];

  return (
    <div className="relative overflow-hidden py-12">
      <div className="marquee-wrapper">
        <div className="marquee-container">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="marquee-item">
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={50}
                className="hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
