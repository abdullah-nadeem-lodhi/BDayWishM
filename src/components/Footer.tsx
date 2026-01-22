import { Heart, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center relative">
      <div className="max-w-2xl mx-auto">
        <div className="card-celebration p-8 mb-8">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
          <p className="text-xl font-display text-primary mb-4">
            "A day late, but the love is always on time!"
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Mahnoor, even though I couldn't wish you on your actual birthday, 
            I hope this website shows you just how much you mean to me. 
            You're not just my student – you're a cherished friend, and I'm 
            so grateful to have you in my life. Here's to celebrating you, 
            not just today, but every day! 🎉
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
          <span>Made with</span>
          <Heart className="w-5 h-5 text-primary animate-heart-beat" fill="currentColor" />
          <span>for you</span>
        </div>

        <p className="text-lg font-display text-primary">
          With love and warm wishes,
        </p>
        <p className="text-2xl font-display text-gradient mt-2">
          Your Friend & Teacher 💕
        </p>

        <div className="mt-8 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} • A Special Birthday Tribute</p>
          <p className="mt-1 text-2xl">🐱 🎂 ✨ 💖 🎉</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 left-4 text-4xl opacity-20">🐾</div>
      <div className="absolute bottom-4 right-4 text-4xl opacity-20">🐾</div>
    </footer>
  );
};
