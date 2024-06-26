import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => (
  <div className={className}>
    <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
      {text}
    </h1>
    <div className="w-40 h-2 bg-green-500 rounded-full" />
    <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2" />
  </div>
);

export default Title;
