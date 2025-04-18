import { Card } from "@/components/ui/card";

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
  },
  {
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Waterfall Bridge"
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "Orange Flowers"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Lake Reflection"
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Wildlife"
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "Mountain Range"
  },
  {
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    title: "Forest Light"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/20">
      <h2 className="text-3xl font-light text-center mb-12 text-textColor">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
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
        ))}
      </div>
    </section>
  );
};

export default Gallery;
