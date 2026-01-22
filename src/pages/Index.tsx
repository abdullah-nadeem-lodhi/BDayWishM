import { Confetti } from "@/components/Confetti";
import { HeroSection } from "@/components/HeroSection";
import { WishesSection } from "@/components/WishesSection";
import { CatCardsSection } from "@/components/CatCardsSection";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Confetti />
      <MusicPlayer />
      <HeroSection />
      <WishesSection />
      <CatCardsSection />
      <Footer />
    </div>
  );
};

export default Index;
