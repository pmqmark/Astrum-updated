import Image from "next/image";

const partners = [
  { name: "Partner 1", logo: "/images/partners/yesbanklogo.png" },
  { name: "Partner 2", logo: "/images/partners/avanse.jpeg" },
  { name: "Partner 3", logo: "/images/partners/auxilo.webp" },
  { name: "Partner 4", logo: "/images/partners/credila.png"},
  { name: "Partner 5", logo: "/images/partners/poonawalla.avif"},
  { name: "Partner 6", logo: "/images/partners/prodigy.jpeg"},
   { name: "Partner 7", logo: "/images/partners/mpower.webp"},
];

const OurPartners = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-darkmode">
      <div
      data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'
       className="container mx-auto max-w-4xl px-4">
        <h2 className="font-medium md:text-5xl text-2xl text-midnight_text dark:text-white text-center max-w-3xl mx-auto">
          Our Partners
        </h2>
        <div
        data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center justify-center pt-14">
          {partners.map((partner, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-lg bg-white dark:bg-darklight shadow hover:shadow-lg transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
                className="object-contain h-16"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
