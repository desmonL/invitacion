export enum AppStep {
  VIDEO = 'VIDEO',
  CONFIRMATION = 'CONFIRMATION',
  DETAILS = 'DETAILS',
}

export interface EventLocation {
  venue: string;
  address: string;
  city: string;
  mapQuery: string; // Kept for legacy or fallback
  googleMapsLink: string; // Direct external link
  venueImageUrl: string; // Replacement for map embed
}

export interface EventDate {
  date: string;
  time: string;
  dayOfWeek: string;
}

export interface InvitationData {
  hosts: string[];
  eventName: string;
  location: EventLocation;
  dateTime: EventDate;
  videoUrl: string;
}