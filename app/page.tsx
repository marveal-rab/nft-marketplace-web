import { NarBar, Footer, Category, Carousel } from "@/components";

export default function Home() {
  return (
    <div className="w-auto mx-16">
      <NarBar />
      <Category />
      <Carousel cards={4} />

      <p>Hello World</p>
      <Footer />
    </div>
  );
}
