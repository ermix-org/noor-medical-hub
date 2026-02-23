import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هي ساعات عمل العيادة؟",
    answer: "تعمل العيادة من السبت إلى الخميس، من الساعة 9 صباحاً حتى 9 مساءً. يوم الجمعة إجازة رسمية.",
  },
  {
    question: "هل يمكنني حجز موعد عبر الإنترنت؟",
    answer: "نعم، يمكنك حجز موعدك من خلال نموذج التواصل في موقعنا أو الاتصال بنا مباشرة وسنقوم بتأكيد الموعد معك.",
  },
  {
    question: "هل تقبل العيادة التأمين الطبي؟",
    answer: "نعم، نتعامل مع معظم شركات التأمين الطبي المعتمدة في المملكة. يرجى التواصل معنا للتأكد من تغطية شركتك.",
  },
  {
    question: "ما هي التخصصات المتوفرة في العيادة؟",
    answer: "نوفر خدمات الفحص العام، طب الأطفال، أمراض القلب، والجلدية، مع فريق من الأطباء المتخصصين ذوي الخبرة.",
  },
  {
    question: "هل تتوفر خدمة الطوارئ؟",
    answer: "العيادة تقدم خدمات الرعاية الأولية والاستشارات الطبية. في حالات الطوارئ، ننصح بالتوجه لأقرب مستشفى أو الاتصال بالإسعاف.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-20 bg-card section-fade-in">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-foreground mb-12">الأسئلة الشائعة</h2>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-right text-foreground font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FaqSection;
