import { useEffect, useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-8 h-8 text-gold animate-bounce-slow opacity-60" />
        <Star className="absolute top-32 right-20 w-6 h-6 text-primary float-animation opacity-70" />
        <Heart className="absolute bottom-40 left-20 w-10 h-10 text-coral animate-heart-beat opacity-50" />
        <Sparkles className="absolute bottom-32 right-16 w-6 h-6 text-lavender sparkle opacity-60" />
        <Star className="absolute top-1/2 left-8 w-5 h-5 text-gold float-animation opacity-50" style={{ animationDelay: "1s" }} />
        <Heart className="absolute top-40 right-1/4 w-6 h-6 text-primary animate-heart-beat opacity-40" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
            ✨ A Belated but Heartfelt Wish ✨
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-gradient glow-text mb-6">
            Happy Birthday
          </h1>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-primary mb-4">
            Mahnoor! 🎂
          </h2>
          
          <p className="text-sm text-muted-foreground mb-8">
            🗓️ January 8th → January 22nd • 14 days late, but the love is infinite! 💕
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Even though your special day has passed, the warmth and love in my heart for you 
            remains just as bright! 🌟 This celebration is proof that some wishes are worth 
            waiting for, just like our beautiful friendship.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#wishes"
              className="btn-celebration inline-flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Read My Wishes
            </a>
            <a
              href="#cards"
              className="px-6 py-3 rounded-full font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              See Your Cards 🐱
            </a>
          </div>
        </div>

        {/* Cat paw prints decoration */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-8 opacity-30">
          <span className="text-4xl">🐾</span>
          <span className="text-4xl">🐾</span>
          <span className="text-4xl">🐾</span>
        </div>
      </div>
    </section>
  );
};
