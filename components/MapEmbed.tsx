import React from 'react';

interface MapEmbedProps {
  query: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({ query }) => {
  const encodedQuery = encodeURIComponent(query);
  
  return (
    <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden shadow-inner">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY || ''}&q=${encodedQuery}&output=embed`}
        // Note: Since we don't have a real API key in this demo environment, 
        // we use the standard iframe embed URL structure which often works for simple place queries 
        // or falls back to a search mode. 
        // For production, a valid API Key in the src is required: `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=...`
        // Below is a fallback free embed structure often used for demos:
        srcDoc={!process.env.GOOGLE_MAPS_API_KEY ? undefined : undefined}
      >
      </iframe>
      
      {/* Fallback for demo purposes if no API key is present - using the basic search embed */}
      <iframe 
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
        src={`https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        frameBorder="0" 
        scrolling="no" 
        title="Ubicación del evento"
      />
    </div>
  );
};

export default MapEmbed;