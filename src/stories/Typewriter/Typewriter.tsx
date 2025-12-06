import React, { useState, useEffect } from "react";

export interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 100,
  delay = 2000,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isShowingCursor, setIsShowingCursor] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Finished typing, start deleting after delay
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timer = setTimeout(handleTyping, typingSpeed);

    // Cursor blinking
    const cursorTimer = setInterval(() => {
      setIsShowingCursor((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, [displayText, currentWordIndex, isDeleting, words, speed, delay]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="text-6xl font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
        {displayText}
        <span
          className={`inline-block ml-1 text-primary-400 ${
            isShowingCursor ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          _
        </span>
      </span>
    </div>
  );
};
