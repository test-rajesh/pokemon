// components/HeroClient.js
"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Server = dynamic(() => import("./Server"), { ssr: true });

export default function Client() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      const fadeOutTimer = setTimeout(() => {
        setIsFadingOut(false);
      }, 500);
      return () => clearTimeout(fadeOutTimer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isFadingOut) {
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      return () => clearTimeout(removeTimer);
    }
  }, [isFadingOut]);

  return (
    <div className="hero-wrapper">
      {isVisible && (
        <div className={`${isFadingOut ? "fade-out" : "fade-in"}`}>
          <Server />
        </div>
      )}
    </div>
  );
}
