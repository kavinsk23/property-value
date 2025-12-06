import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-6 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Color Palette Test
      </h1>

      <div className="grid grid-cols-3 gap-4 w-full max-w-xl">
        <div className="bg-primary p-4 text-neutral-50 rounded-lg">
          Primary Color
        </div>

        <div className="bg-primary-light p-4 text-neutral-900 rounded-lg">
          Primary Light
        </div>

        <div className="bg-primary-dark p-4 text-neutral-50 rounded-lg">
          Primary Dark
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full max-w-xl mt-4">
        <div className="bg-neutral-100 p-4 text-neutral-900 rounded-lg">
          Neutral 100
        </div>

        <div className="bg-neutral-200 p-4 text-neutral-900 rounded-lg">
          Neutral 200
        </div>

        <div className="bg-neutral-700 p-4 text-neutral-50 rounded-lg">
          Neutral 700
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full max-w-xl mt-4">
        <div className="bg-neutral-800 p-4 text-neutral-50 rounded-lg">
          Neutral 800
        </div>

        <div className="bg-neutral-900 p-4 text-neutral-50 rounded-lg">
          Neutral 900
        </div>

        <div className="bg-neutral-50 p-4 text-neutral-900 border border-neutral-200 rounded-lg">
          Neutral 50
        </div>
      </div>
    </div>
  );
};

export default App;
