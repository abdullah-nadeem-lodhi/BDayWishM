import { useState } from "react";
import { Sparkles, Heart } from "lucide-react";

interface Candle {
  id: number;
  lit: boolean;
  x: number;
}

const wishes = [
  "May all your dreams come true! ✨",
  "Wishing you endless happiness! 💖",
  "May this year bring you joy! 🌟",
  "You deserve all the best! 🎉",
  "Sending you love and light! 💫",
];

export const BirthdayCake = () => {
  const [candles, setCandles] = useState<Candle[]>([
    { id: 1, lit: true, x: 20 },
    { id: 2, lit: true, x: 35 },
    { id: 3, lit: true, x: 50 },
    { id: 4, lit: true, x: 65 },
    { id: 5, lit: true, x: 80 },
  ]);
  const [showWish, setShowWish] = useState(false);
  const [currentWish, setCurrentWish] = useState("");
  const [allBlownOut, setAllBlownOut] = useState(false);

  const blowOutCandle = (id: number) => {
    const newCandles = candles.map((c) =>
      c.id === id ? { ...c, lit: false } : c
    );
    setCandles(newCandles);

    // Check if all candles are blown out
    if (newCandles.every((c) => !c.lit)) {
      setAllBlownOut(true);
      setTimeout(() => {
        setCurrentWish(wishes[Math.floor(Math.random() * wishes.length)]);
        setShowWish(true);
      }, 500);
    }
  };

  const resetCandles = () => {
    setCandles(candles.map((c) => ({ ...c, lit: true })));
    setShowWish(false);
    setAllBlownOut(false);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-muted-foreground mb-2">
            🎂 Your birthday was on <span className="font-semibold text-primary">January 8th</span> 🎂
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
            Make a Wish, Mahnoor!
          </h2>
          <p className="text-muted-foreground">
            Click on each candle to blow it out! 🌬️
          </p>
        </div>

        <div className="relative inline-block">
          {/* Cake Container */}
          <div className="relative w-72 md:w-96 mx-auto">
            {/* Candles */}
            <div className="relative h-24 mb-2">
              {candles.map((candle) => (
                <button
                  key={candle.id}
                  onClick={() => candle.lit && blowOutCandle(candle.id)}
                  className={`absolute bottom-0 transform -translate-x-1/2 transition-all duration-300 ${
                    candle.lit ? "cursor-pointer hover:scale-110" : "cursor-default"
                  }`}
                  style={{ left: `${candle.x}%` }}
                  disabled={!candle.lit}
                >
                  {/* Candle stick */}
                  <div className="w-3 h-16 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-sm mx-auto relative">
                    {/* Candle stripes */}
                    <div className="absolute inset-0 opacity-30">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="h-1 bg-white/50"
                          style={{ marginTop: `${i * 16}px` }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Flame */}
                  {candle.lit && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="w-4 h-6 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-400 rounded-full animate-pulse" 
                          style={{
                            clipPath: "ellipse(50% 70% at 50% 70%)",
                            animation: "flicker 0.5s ease-in-out infinite alternate"
                          }}
                        />
                        <div className="absolute inset-0 w-2 h-4 bg-gradient-to-t from-yellow-200 to-white rounded-full left-1/2 top-1 transform -translate-x-1/2 opacity-80" />
                      </div>
                    </div>
                  )}
                  
                  {/* Smoke when blown out */}
                  {!candle.lit && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up">
                      <div className="text-gray-400 text-lg">💨</div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Cake layers */}
            <div className="relative">
              {/* Top layer with frosting */}
              <div className="h-12 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-3xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400" 
                  style={{
                    clipPath: "polygon(0% 100%, 5% 40%, 10% 100%, 15% 40%, 20% 100%, 25% 40%, 30% 100%, 35% 40%, 40% 100%, 45% 40%, 50% 100%, 55% 40%, 60% 100%, 65% 40%, 70% 100%, 75% 40%, 80% 100%, 85% 40%, 90% 100%, 95% 40%, 100% 100%)"
                  }}
                />
                {/* Sprinkles */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-2 rounded-full"
                      style={{
                        backgroundColor: ["#FFD700", "#FF69B4", "#87CEEB", "#98FB98", "#DDA0DD"][i % 5],
                        left: `${10 + (i * 7)}%`,
                        top: `${20 + (i % 3) * 15}%`,
                        transform: `rotate(${i * 30}deg)`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Middle layer */}
              <div className="h-10 bg-gradient-to-b from-amber-100 to-amber-200 relative">
                <div className="absolute inset-y-0 left-4 right-4 flex justify-around items-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-red-400 rounded-full" />
                  ))}
                </div>
              </div>
              
              {/* Bottom layer */}
              <div className="h-14 bg-gradient-to-b from-pink-300 to-pink-400 rounded-b-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500"
                  style={{
                    clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)"
                  }}
                />
                {/* Hearts decoration */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-around px-6">
                  {[...Array(4)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 text-pink-200 fill-pink-200" />
                  ))}
                </div>
              </div>
              
              {/* Cake plate */}
              <div className="h-3 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full mx-auto w-full mt-1" />
            </div>
          </div>

          {/* Wish reveal */}
          {showWish && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="card-celebration p-8 animate-scale-in bg-card/95 backdrop-blur-sm pointer-events-auto">
                <Sparkles className="w-10 h-10 text-gold mx-auto mb-4 animate-pulse" />
                <p className="text-2xl font-display text-primary mb-2">Your wish is granted!</p>
                <p className="text-xl text-foreground">{currentWish}</p>
                <div className="mt-4 text-4xl">🎉✨🎂✨🎉</div>
              </div>
            </div>
          )}
        </div>

        {/* Reset button */}
        {allBlownOut && (
          <button
            onClick={resetCandles}
            className="mt-8 btn-celebration animate-fade-in-up"
          >
            Light candles again! 🕯️
          </button>
        )}

        <p className="mt-8 text-sm text-muted-foreground">
          It's been 14 days since your special day, but it's never too late to celebrate! 🎊
        </p>
      </div>

      <style>{`
        @keyframes flicker {
          0% { transform: scale(1) translateX(-50%); }
          50% { transform: scale(1.1, 0.9) translateX(-50%); }
          100% { transform: scale(0.95, 1.05) translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
