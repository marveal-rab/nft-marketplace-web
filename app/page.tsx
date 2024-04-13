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
        <div>
          <NarBar />
          <Category />
          <Swiper />
        </div>
        <div className="mb-12">
          <Trend />
          <Showcase />
          <Tutorial />
        </div>
      </div>
      <Footer />
    </div>
  );
}
