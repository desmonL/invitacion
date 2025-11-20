import React, { useState, useCallback } from 'react';
import { AppStep } from './types';
import { EVENT_DATA } from './constants';
import VideoIntro from './components/VideoIntro';
import ConfirmationStep from './components/ConfirmationStep';
import EventDetails from './components/EventDetails';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.VIDEO);

  // Callback when video ends
  const handleVideoComplete = useCallback(() => {
    setCurrentStep(AppStep.CONFIRMATION);
  }, []);

  // Callback when user clicks "Attend"
  const handleConfirmAttendance = useCallback(() => {
    setCurrentStep(AppStep.DETAILS);
  }, []);

  return (
    <div className="font-sans text-text antialiased selection:bg-secondary selection:text-white">
      
      {/* Step 1: Video Intro */}
      {currentStep === AppStep.VIDEO && (
        <VideoIntro 
          videoUrl={EVENT_DATA.videoUrl} 
          onComplete={handleVideoComplete} 
        />
      )}

      {/* Step 2: Confirmation Button */}
      {/* We keep it mounted but hidden or conditional to ensure clean transition logic */}
      {currentStep === AppStep.CONFIRMATION && (
        <ConfirmationStep onConfirm={handleConfirmAttendance} />
      )}

      {/* Step 3: Event Details */}
      {currentStep === AppStep.DETAILS && (
        <EventDetails />
      )}
    </div>
  );
};

export default App;