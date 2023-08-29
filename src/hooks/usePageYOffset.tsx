import { useState, useEffect } from "react";

const usePageYOffset = (): [number, "up" | "down"] => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [direction, setDirection] = useState<"up" | "down">("up");

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                setScrollY(window.pageYOffset);
                if (window.pageYOffset > lastScrollY) {
                    setDirection("down");
                } else {
                    setDirection("up");
                }
                setLastScrollY(window.pageYOffset);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
        }

        // Clean up the event listener on component unmount
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, [lastScrollY]);

    return [scrollY, direction];
};

export default usePageYOffset;
