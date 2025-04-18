
import { Card } from "@/components/ui/card";

const images = [
  {
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    title: "Starry Night"
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    title: "Forest Lights"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Serene Lake"
  },
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Lifestyle"
  },
  {
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    title: "Portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Ocean View"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <h2 className="text-3xl font-light text-center mb-12 text-white">Featured Work</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <Card key={index} className="gallery-item bg-black/20 backdrop-blur">
            <div className="relative aspect-square">
              <img
                src={image.src}
                alt={image.title}
                className="gallery-image"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
