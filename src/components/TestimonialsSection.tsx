import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد الشمري",
    rating: 5,
    text: "تجربة ممتازة! الطاقم الطبي محترف والعيادة نظيفة ومريحة. أنصح بها بشدة.",
  },
  {
    name: "فاطمة العلي",
    rating: 5,
    text: "أفضل عيادة زرتها. الدكتور كان صبوراً جداً وشرح لي كل شيء بالتفصيل.",
  },
  {
    name: "محمد القحطاني",
    rating: 4,
    text: "خدمة رائعة ومواعيد منتظمة. أشكر فريق العمل على حسن الاستقبال والمعاملة.",
  },
  {
    name: "نورة السعيد",
    rating: 5,
    text: "عيادة الأطفال ممتازة. ابني كان خائفاً لكن الطبيبة تعاملت معه بلطف شديد.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-muted section-fade-in">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-foreground mb-12">آراء مرضانا</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < t.rating ? "text-amber-400 fill-amber-400" : "text-border"}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">"{t.text}"</p>
            <p className="text-sm font-semibold text-foreground">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
