
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="about-section">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-black/20 backdrop-blur">
          <h2 className="text-3xl font-light text-center mb-6 text-white">About Me</h2>
          <p className="text-white/80 leading-relaxed text-center">
            With a passion for capturing life's beautiful moments, I specialize in creating timeless 
            photographs that tell your unique story. Whether it's a intimate portrait session or a 
            grand landscape, every image is crafted with attention to detail and artistic vision.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
