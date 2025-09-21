import React from 'react';

const TypingIndecator = () => {
   return (
      <div className="flex gap-1 px-3 py-3 bg-gray-200 rounded-xl self-start">
         <Dot />
         <Dot className="[animation-delay:0.2s]" />
         <Dot className="[animation-delay:0.2s]" />
      </div>
   );
};

type DotProps = {
   className?: String;
};
const Dot = ({ className }: DotProps) => (
   <div
      className={`w-2 h-2 rounded-full bg-gray-800 animate-pulse ${className}`}
   ></div>
);
export default TypingIndecator;
