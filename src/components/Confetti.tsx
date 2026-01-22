import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const colors = [
  "hsl(340, 65%, 65%)",
  "hsl(45, 90%, 60%)",
  "hsl(280, 50%, 75%)",
  "hsl(15, 80%, 70%)",
  "hsl(180, 60%, 65%)",
];

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generateConfetti = () => {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 50; i++) {
        newPieces.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 8 + Math.random() * 8,
        });
      }
      setPieces(newPieces);
    };

    generateConfetti();
    const interval = setInterval(generateConfetti, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
};
