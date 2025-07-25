
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

/**
 * A component that renders a real Google AdMob banner ad unit for the App.
 */
export function AdBanner({ className }: { className?: string }) {

  useEffect(() => {
    const pushAd = () => {
      try {
        // Don't push ad if the page is hidden
        if (document.visibilityState === 'hidden') {
          return;
        }
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdMob error:", err);
      }
    };

    // Delay the push to ensure the container is rendered and has a width.
    const timeout = setTimeout(pushAd, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center text-black bg-transparent",
        className
      )}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3781633352100587"
        data-ad-slot="6590213011"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
