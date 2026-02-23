import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-primary-foreground font-semibold text-lg mb-4">عيادة النور الطبية</p>
      <div className="flex justify-center gap-5 mb-4">
        <a href="#" aria-label="Facebook" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <Facebook size={22} />
        </a>
        <a href="#" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <Instagram size={22} />
        </a>
        <a href="#" aria-label="WhatsApp" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <MessageCircle size={22} />
        </a>
      </div>
      <p className="text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} عيادة النور الطبية. جميع الحقوق محفوظة.
      </p>
    </div>
  </footer>
);

export default Footer;
