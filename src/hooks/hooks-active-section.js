"use client";

import { useEffect } from "react";

export function useActiveSectionHash() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section[id]"),
    ).filter((section) => section.id !== "");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
