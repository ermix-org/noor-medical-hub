import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-card section-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">تواصل معنا</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-secondary rounded-lg p-8 text-center">
                <p className="text-xl font-semibold text-secondary-foreground">
                  ✅ تم إرسال طلبك بنجاح!
                </p>
                <p className="text-muted-foreground mt-2">سنتواصل معك في أقرب وقت.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  required
                  type="text"
                  placeholder="الاسم"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>
                    نوع الخدمة
                  </option>
                  <option value="checkup">الفحص العام</option>
                  <option value="pediatrics">طب الأطفال</option>
                  <option value="cardiology">أمراض القلب</option>
                  <option value="dermatology">الجلدية</option>
                </select>
                <textarea
                  placeholder="الرسالة (اختياري)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  إرسال
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3">
              <Phone size={22} className="text-primary" />
              <span className="text-foreground">+966 12 345 6789</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={22} className="text-primary" />
              <span className="text-foreground">شارع الملك فهد، الرياض، المملكة العربية السعودية</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={22} className="text-primary" />
              <span className="text-foreground">السبت - الخميس: 9 صباحاً - 9 مساءً</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
