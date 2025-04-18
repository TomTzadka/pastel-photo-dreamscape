
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NatureGallery from "./galleries/NatureGallery";
import WildlifeGallery from "./galleries/WildlifeGallery";

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/20">
      <h2 className="text-3xl font-light text-center mb-12 text-textColor">Featured Work</h2>
      <Tabs defaultValue="nature" className="max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="nature">Nature</TabsTrigger>
          <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
        </TabsList>
        <TabsContent value="nature">
          <NatureGallery />
        </TabsContent>
        <TabsContent value="wildlife">
          <WildlifeGallery />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Gallery;
