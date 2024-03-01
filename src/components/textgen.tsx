import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  overallDelay = 0, // Default overall delay is set to 0
}: {
  words: string;
  className?: string;
  overallDelay?: number; // New prop for overall delay
}) => {
  const [scope, animate] = useAnimate();
  const [animationStarted, setAnimationStarted] = useState(false);
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    if (!animationStarted) {
      setTimeout(() => {
        animate(
          "span",
          {
            opacity: 1,
          },
          {
            duration: 2,
            delay: stagger(0.1),
          }
        );
        setAnimationStarted(true);
      }, overallDelay * 1000);
    }
  }, [animationStarted, animate, overallDelay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              initial={{ opacity: 0 }} // Set initial opacity
              animate={{ opacity: 1 }} // Animate opacity to 1
              transition={{ delay: idx * 0.5 }} // Apply staggered delay
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      <div className="mt-4">
        <div className=" leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
