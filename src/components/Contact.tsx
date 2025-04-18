
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <Camera className="mx-auto mb-6 text-primary w-12 h-12" />
        <h2 className="text-3xl font-light mb-6 text-textColor">Let's Work Together</h2>
        <p className="text-textColor/80 mb-8">
          Available for bookings and collaborations
        </p>
        <Button className="bg-primary hover:bg-primary-hover text-textColor">
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default Contact;
