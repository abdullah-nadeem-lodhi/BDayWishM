import { useState } from "react";
import { Play, Pause, Music, ExternalLink } from "lucide-react";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  const youtubeVideoId = "piyLXuSrDYo";
  const youtubeUrl = `https://youtu.be/${youtubeVideoId}`;

  const togglePlay = () => {
    setShowEmbed(true);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="card-celebration flex flex-col gap-3 p-4 backdrop-blur-sm bg-card/95">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground hidden sm:block">
              Birthday Song 🎵
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-primary-foreground" />
              ) : (
                <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
              )}
            </button>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              title="Open in YouTube"
            >
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* YouTube Embed */}
        {showEmbed && (
          <div className="relative w-64 sm:w-80 aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=${youtubeVideoId}`}
              title="Birthday Music"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        )}

        {!showEmbed && (
          <p className="text-xs text-muted-foreground text-center">
            Click play to start the music! 🎶
          </p>
        )}
      </div>
    </div>
  );
};
