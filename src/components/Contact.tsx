
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="max-w-4xl mx-auto text-center">
        <Camera className="mx-auto mb-6 text-white w-12 h-12" />
        <h2 className="text-3xl font-light mb-6 text-white">Let's Work Together</h2>
        <p className="text-white/80 mb-8">
          Available for bookings and collaborations
        </p>
        <Button className="bg-white/10 hover:bg-white/20 text-white">
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default Contact;
