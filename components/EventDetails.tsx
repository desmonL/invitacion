import React from 'react';
import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';
import { EVENT_DATA } from '../constants';

const EventDetails: React.FC = () => {
  const { hosts, eventName, location, dateTime } = EVENT_DATA;

  return (
    <div className="min-h-screen bg-background animate-fade-in pb-12">
      {/* Header Image / Title Area */}
      <header className="bg-primary text-secondary py-12 px-4 text-center shadow-md">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] mb-4 text-white/90">Gran Celebración de</p>
          
          {/* Adjusted typography for long company names */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-6 text-white leading-tight md:leading-snug max-w-4xl mx-auto">
            {hosts.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
          
          <div className="h-px w-32 bg-secondary mx-auto my-6"></div>
          <h2 className="text-3xl md:text-5xl font-light italic text-secondary">{eventName}</h2>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Date & Time Card */}
          <div className="bg-white p-8 rounded-lg shadow-xl text-center border-t-4 border-primary transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center mb-4 text-primary">
              <Calendar size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif text-gray-800 mb-2 capitalize">{dateTime.dayOfWeek}</h3>
            <p className="text-3xl font-bold text-primary mb-2">{dateTime.date}</p>
            <div className="flex items-center justify-center gap-2 text-gray-600 mt-4">
              <Clock size={18} />
              <span className="font-medium tracking-wide">{dateTime.time}</span>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-lg shadow-xl text-center border-t-4 border-secondary transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center mb-4 text-secondary">
              <MapPin size={40} strokeWidth={1.5} className="text-secondary" />
            </div>
            <h3 className="text-lg font-serif text-gray-800 mb-2 leading-tight">{location.venue}</h3>
            <p className="text-gray-500 mb-4">{location.address}</p>
            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{location.city}</p>
            
            <a 
              href={location.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 text-sm font-semibold transition-colors"
            >
              <ExternalLink size={16} />
              Ver ubicación en Google Maps
            </a>
          </div>
        </div>

        {/* Venue Image Section */}
        <div className="mt-8 bg-white p-2 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96 w-full rounded overflow-hidden group">
              <img 
                src={location.venueImageUrl} 
                alt="Lugar del evento" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <a 
                  href={location.googleMapsLink}
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white font-serif tracking-wide flex items-center gap-2 hover:underline"
                >
                  <MapPin size={20} />
                  Cómo llegar
                </a>
              </div>
            </div>
        </div>
      </main>

      <footer className="mt-12 pb-8 text-center text-gray-400 text-xs">
        <p>© 2025 {hosts[0]}. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default EventDetails;