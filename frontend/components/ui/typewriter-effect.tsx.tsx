"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const wordsArray = words.map((word) => ({
        ...word,
        text: word.text.split(""),
    }));

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: 1,
                    width: "fit-content",
                },
                {
                    duration: 0.6, // Increased duration for slower animation
                    delay: stagger(0.2), // Increased delay for slower stagger effect
                    ease: "easeInOut",
                }
            ).then(() => {
                // Reverse the animation
                animate(
                    "span",
                    {
                        opacity: 0,
                    },
                    {
                        duration: 0.6, // Increased duration for slower fade-out
                        delay: stagger(0.2, { from: "last" }),
                        ease: "easeInOut",
                    }
                );
            });
        }
    }, [isInView]);


    const renderWords = () => (
        <motion.div ref={scope} className="inline">
            {wordsArray.map((word, idx) => (
                <div key={`word-${idx}`} className="inline-block">
                    {word.text.map((char, index) => (
                        <motion.span
                            key={`char-${index}`}
                            className={cn(
                                `dark:text-white text-black opacity-0 hidden`,
                                word.className
                            )}
                        >
                            {char}
                        </motion.span>
                    ))}
                    &nbsp;
                </div>
            ))}
        </motion.div>
    );

    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5, // Slower blink effect
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const wordsArray = words.map((word) => ({
        ...word,
        text: word.text.split(""),
    }));

    const renderWords = () => (
        <div>
            {wordsArray.map((word, idx) => (
                <div key={`word-${idx}`} className="inline-block">
                    {word.text.map((char, index) => (
                        <span
                            key={`char-${index}`}
                            className={cn(`dark:text-white text-black`, word.className)}
                        >
                            {char}
                        </span>
                    ))}
                    &nbsp;
                </div>
            ))}
        </div>
    );

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                animate={{
                    width: "fit-content",
                }}
                whileHover={{
                    width: "0%",
                }}
                transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <div
                    className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {renderWords()}{" "}
                </div>{" "}
            </motion.div>
            
        </div>
    );
};
