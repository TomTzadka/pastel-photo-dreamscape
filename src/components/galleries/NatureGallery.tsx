
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const images = [
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Ocean Waves"
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    title: "Mountain Vista"
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Foggy Summit"
  }
];

const NatureGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xl">{image.title}</p>
                </div>
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-auto object-contain"
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default NatureGallery;
