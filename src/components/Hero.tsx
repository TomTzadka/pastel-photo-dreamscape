
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl md:text-6xl font-light mb-6">Capturing Moments</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center">
          Professional photography that tells your story
        </p>
        <Button 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white text-white"
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Gallery
        </Button>
      </div>
    </div>
  );
};

export default Hero;
