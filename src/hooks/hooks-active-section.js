"use client";

import { useEffect } from "react";

export function useActiveSectionHash() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section[id]"),
    ).filter((section) => section.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const activeSection = visibleSections[0];

        if (activeSection) {
          window.history.replaceState(null, "", `#${activeSection.target.id}`);
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5],
        rootMargin: "-20% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
