import {
  NarBar,
  Footer,
  Category,
  Swiper,
  Trend,
  Showcase,
  Tutorial,
} from "./components";

export default function Home() {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-16">
        <NarBar className="sticky top-0 z-50 bg-black" />
        <Category />
        <Swiper />
        <Trend />
        <Showcase />
        <Tutorial />
      </div>
      <Footer />
    </div>
  );
}
