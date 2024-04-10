import {
  NarBar,
  Footer,
  Category,
  Carousel,
  Trend,
  Showcase,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900/30">
      <div className="max-w-screen-2xl mx-auto px-16">
        <NarBar />
        <Category />
        <Carousel />
        <Trend />
        <Showcase />
        <p>Hello World</p>
        <Footer />
      </div>
    </div>
  );
}
