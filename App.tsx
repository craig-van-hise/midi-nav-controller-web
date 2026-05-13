import React from 'react';
import { NavContainer } from './components/NavContainer';

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl font-black mb-8 text-center tracking-tighter">
          // PROTOTYPE_v0.1 // <span className="text-green-600">NAV_CONTROLLER</span>
        </h1>
        
        <NavContainer />

        <div className="mt-12 p-4 border border-dashed border-gray-400 text-gray-500 text-xs font-mono max-w-lg mx-auto">
          <p className="font-bold mb-2">INSTRUCTIONS:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Right-click on <strong className="text-black">Arrows</strong> to Config (Step Size, MIDI Info).</li>
            <li>Right-click on <strong className="text-black">Background</strong> for Global Settings.</li>
            <li>Select <strong className="text-black">MIDI Learn</strong> to start mapping sequence.</li>
            <li>(Press <strong className="text-black">SPACE</strong> to simulate MIDI input during learn mode).</li>
            <li>Toggle <strong className="text-black">Diagonals</strong> via Global Menu.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;