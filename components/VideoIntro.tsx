import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, SkipForward, AlertCircle } from 'lucide-react';

interface VideoIntroProps {
  videoUrl: string;
  onComplete: () => void;
}

const VideoIntro: React.FC<VideoIntroProps> = ({ videoUrl, onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Ensure video plays automatically
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay prevented by browser policy or load error", error);
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoError = () => {
    console.error("Video failed to load. Skipping to next step.");
    setHasError(true);
    // Optional: automatically skip after a short delay if video fails
    // setTimeout(onComplete, 2000); 
    // Or immediately:
    onComplete();
  };

  if (hasError) {
    return null; // Or a loading spinner, but returning null mounts the next step faster if parent handles state
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Background blur effect for desktop viewing of vertical video */}
      <div className="absolute inset-0 hidden md:block opacity-30 blur-xl transform scale-110">
        <video
           src={videoUrl}
           className="w-full h-full object-cover"
           muted
           loop
           playsInline
        />
      </div>

      {/* Main Video Player */}
      <video
        ref={videoRef}
        src={videoUrl}
        // Mobile: object-cover (fill screen), Desktop: object-contain (show full vertical video)
        className="w-full h-full object-cover md:object-contain relative z-10 shadow-2xl"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onComplete}
        onError={handleVideoError}
      />
      
      {/* Controls Overlay */}
      <div className="absolute bottom-10 right-6 z-20 flex gap-4">
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all"
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        
        <button
          onClick={onComplete}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all flex items-center gap-2 pr-5"
        >
          <SkipForward size={24} />
          <span className="text-sm font-medium tracking-wider">SALTAR</span>
        </button>
      </div>

      {/* Progress Indicator (optional visual cue) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 z-20">
        <div className="h-full bg-white/50 animate-[width_20s_linear]" style={{ width: '0%' }} /> 
      </div>
    </div>
  );
};

export default VideoIntro;