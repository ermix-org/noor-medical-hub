import { Stethoscope, Baby, HeartPulse, Sparkles } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "الفحص العام",
    description: "فحوصات شاملة دورية للاطمئنان على صحتك العامة والكشف المبكر عن الأمراض.",
  },
  {
    icon: Baby,
    title: "طب الأطفال",
    description: "رعاية متخصصة لصحة طفلك من الولادة وحتى المراهقة بأحدث الأساليب.",
  },
  {
    icon: HeartPulse,
    title: "أمراض القلب",
    description: "تشخيص وعلاج أمراض القلب والأوعية الدموية بأحدث التقنيات الطبية.",
  },
  {
    icon: Sparkles,
    title: "الجلدية",
    description: "علاج الأمراض الجلدية والعناية بالبشرة مع أطباء متخصصين.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-muted section-fade-in">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-foreground mb-12">خدماتنا</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <service.icon size={28} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
