import { useState, useEffect } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  charDelay?: number;
  initialDelay?: number;
}

const AnimatedHeading = ({
  text,
  className = "",
  charDelay = 30,
  initialDelay = 200,
}: AnimatedHeadingProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split("\n");

  let globalCharIndex = 0;

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => {
        const lineStartIndex = globalCharIndex;
        const chars = line.split("");

        const lineElement = (
          <span key={lineIndex} className="block">
            {chars.map((char, charIndex) => {
              const absoluteIndex = lineStartIndex + charIndex;
              const delay = absoluteIndex * charDelay;
              const isSpace = char === " ";

              return (
                <span
                  key={`${lineIndex}-${charIndex}`}
                  className="inline-block transition-all"
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateX(0)" : "translateX(-18px)",
                    transitionDuration: "500ms",
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {isSpace ? "\u00A0" : char}
                </span>
              );
            })}
          </span>
        );

        globalCharIndex += chars.length;

        return lineElement;
      })}
    </h1>
  );
};

export default AnimatedHeading;
