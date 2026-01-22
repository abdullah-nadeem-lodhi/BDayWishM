import { ReactNode } from "react";

interface BirthdayCardProps {
  title: string;
  message: string;
  icon: ReactNode;
  delay?: number;
  variant?: "default" | "cat";
}

export const BirthdayCard = ({ title, message, icon, delay = 0, variant = "default" }: BirthdayCardProps) => {
  const baseClasses = variant === "cat" ? "card-cat" : "card-celebration";
  
  return (
    <div
      className={`${baseClasses} group hover:scale-105 transition-all duration-500 opacity-0 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {variant === "cat" && (
        <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
          🐱
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-display text-primary mb-2">{title}</h3>
          <p className="text-foreground/80 leading-relaxed">{message}</p>
        </div>
      </div>

      {variant === "cat" && (
        <div className="absolute bottom-2 left-4 text-2xl opacity-30">
          🐾
        </div>
      )}
    </div>
  );
};
