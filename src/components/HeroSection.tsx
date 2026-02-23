import heroImage from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="عيادة النور الطبية"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-tight">
          عيادة النور الطبية
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
          صحتك أولويتنا
        </p>
        <button
          onClick={scrollToContact}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          احجز موعدك
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
