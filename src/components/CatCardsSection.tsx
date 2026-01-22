import { BirthdayCard } from "./BirthdayCard";
import { Cat, Heart, Sparkles, Star, Crown, Moon } from "lucide-react";

const catWishes = [
  {
    title: "Purr-fect Friend 🐱",
    message: "Just like cats, you have this magical ability to make everyone around you feel warm and loved. You're absolutely purr-fect, Mahnoor! Here's to a year filled with as much joy as a cat in a sunbeam!",
    icon: <Cat className="w-7 h-7 text-lavender" />,
  },
  {
    title: "Meow-velous You! 😺",
    message: "If you were a cat, you'd definitely be the queen of the household – graceful, beautiful, and completely lovable! May your year ahead be as meow-velous as you are!",
    icon: <Crown className="w-7 h-7 text-gold" />,
  },
  {
    title: "Whisker Wishes 🐾",
    message: "Sending you whisker-loads of birthday love! May your days be filled with cozy naps in sunny spots, delicious treats, and endless belly rubs of happiness (metaphorically, of course! 😄).",
    icon: <Sparkles className="w-7 h-7 text-primary" />,
  },
  {
    title: "Paw-sitive Vibes 💖",
    message: "Here's to a year of paw-sitive energy, curious adventures, and landing on your feet no matter what life throws at you! You've got nine lives worth of amazing things coming your way!",
    icon: <Heart className="w-7 h-7 text-coral" />,
  },
  {
    title: "Cat-tastic Dreams 🌙",
    message: "Like a cat gazing at the moon, may you always reach for the stars and know that your dreams are within paw's reach. Dream big, my dear cat-loving friend!",
    icon: <Moon className="w-7 h-7 text-lavender" />,
  },
  {
    title: "Fur-ever Friends 🐱💕",
    message: "Just like the bond between a cat and their favorite human, our friendship is special and fur-ever! Thank you for being the purrfect student and friend. Meow and always!",
    icon: <Star className="w-7 h-7 text-gold" />,
  },
];

export const CatCardsSection = () => {
  return (
    <section id="cards" className="py-20 px-4 bg-gradient-to-b from-transparent via-lavender-light/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🐱 🎂 🐱</div>
          <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
            Cat-themed Birthday Love
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Because I know how much you love cats, here are some extra special feline-inspired wishes! 🐾
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catWishes.map((wish, index) => (
            <BirthdayCard
              key={index}
              title={wish.title}
              message={wish.message}
              icon={wish.icon}
              delay={index * 150}
              variant="cat"
            />
          ))}
        </div>

        <div className="text-center mt-12 text-4xl opacity-50">
          🐾 🐱 🐾 🐱 🐾
        </div>
      </div>
    </section>
  );
};
