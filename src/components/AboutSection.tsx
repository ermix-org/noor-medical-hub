import { ShieldCheck } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 bg-card section-fade-in">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-foreground mb-12">عن العيادة</h2>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
          <ShieldCheck size={48} className="text-accent" />
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-right">
          عيادة النور الطبية تقدم رعاية صحية متكاملة بأحدث الأساليب الطبية وفريق من الأطباء
          المتخصصين في بيئة مريحة وآمنة. نسعى لتقديم أفضل الخدمات الطبية بأعلى معايير الجودة
          والاحترافية لضمان صحة وسلامة مرضانا.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
