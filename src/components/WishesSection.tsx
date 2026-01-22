import { Heart, Star, Sparkles, Gift, Cake, PartyPopper } from "lucide-react";
import { BirthdayCard } from "./BirthdayCard";

const wishes = [
  {
    title: "A Friend Like No Other 💫",
    message: "Mahnoor, I may have missed your special day, but I could never miss expressing how grateful I am to have you in my life. As my student and friend, you've brought so much joy and brightness into every moment we share.",
    icon: <Heart className="w-7 h-7 text-primary" />,
  },
  {
    title: "Celebrating You! 🎉",
    message: "Better late than never, right? Your birthday deserves to be celebrated every single day because that's how special you are! Here's to making up for lost time with extra love and warmth.",
    icon: <PartyPopper className="w-7 h-7 text-gold" />,
  },
  {
    title: "Dreams & Wishes ✨",
    message: "May this new year of your life be filled with endless possibilities, beautiful surprises, and all the happiness your heart can hold. Dream big, dear Mahnoor – you deserve everything wonderful!",
    icon: <Star className="w-7 h-7 text-lavender" />,
  },
  {
    title: "A Sweet Reminder 🎂",
    message: "Even though the candles have already been blown out, I'm sending you all the birthday magic in the world. May every wish you made come true, and may life surprise you with even more blessings!",
    icon: <Cake className="w-7 h-7 text-coral" />,
  },
  {
    title: "Gifts of Friendship 🎁",
    message: "The greatest gift I've received is your friendship. Thank you for being such an amazing student and an even more amazing friend. Here's to many more years of laughter and memories together!",
    icon: <Gift className="w-7 h-7 text-primary" />,
  },
  {
    title: "Shining Bright 🌟",
    message: "You light up every room you enter, Mahnoor. Your kindness, your smile, and your beautiful soul make the world a better place. Never stop being the incredible person you are!",
    icon: <Sparkles className="w-7 h-7 text-gold" />,
  },
];

export const WishesSection = () => {
  return (
    <section id="wishes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
            Birthday Wishes for You
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each card holds a piece of my heart and warmest wishes for you, dear Mahnoor 💕
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <BirthdayCard
              key={index}
              title={wish.title}
              message={wish.message}
              icon={wish.icon}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
