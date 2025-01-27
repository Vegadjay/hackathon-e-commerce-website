import React from 'react';

interface BackgroundLinesProps {
  className: string;
  children: React.ReactNode;
}

const BackgroundLines: React.FC<BackgroundLinesProps> = ({ className, children }) => {
  return (
    <div className="w-full min-h-[40vh] flex items-center justify-center py-8 sm:py-12 md:py-16">
      <div className={`${className} max-w-7xl w-full`}>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white 
            text-2xl sm:text-3xl md:text-5xl lg:text-7xl 
            font-sans relative z-20 font-bold tracking-tight text-center
            px-4 sm:px-6 md:px-8">
            Rajwadi <span className="text-red-400">Poshaak</span>,
            <br className="md:hidden" /> 
            <span className="block mt-2 sm:mt-3 md:mt-4">पधारो म्हारे देश.</span>
          </h2>
          
          <p className="max-w-xl mx-auto text-center px-4 sm:px-6
            text-sm sm:text-base md:text-lg
            text-neutral-700 dark:text-neutral-400
            leading-relaxed">
            Get the best advices from our experts, including expert artists,
            painters, marathon enthusiasts and RDX, totally free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundLines;