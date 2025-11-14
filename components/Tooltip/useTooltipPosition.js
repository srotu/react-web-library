import { useLayoutEffect, useState } from "react";

export function useTooltipPosition({ open, triggerRef, popupRef, offset = 8 }) {
  const [pos, setPos] = useState({ left: 0, top: 0, placement: "top" });

  useLayoutEffect(() => {
    if (!open || !triggerRef.current || !popupRef.current) return;

    const calc = () => {
      const t = triggerRef.current.getBoundingClientRect();
      const p = popupRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Foretræk top hvis der er plads
      const hasRoomTop = t.top >= p.height + offset;
      const hasRoomBottom = vh - t.bottom >= p.height + offset;

      let placement = "top";
      if (!hasRoomTop && hasRoomBottom) placement = "bottom";
      // Hvis hverken top eller bottom har fuld plads, vælg den med mest plads
      if (!hasRoomTop && !hasRoomBottom) {
        placement = (t.top > vh - t.bottom) ? "top" : "bottom";
      }

      // Primær vandret placering - centreret over trigger
      let left = t.left + t.width / 2 - p.width / 2;
      // Clamp til viewport med 8px margin
      const margin = 8;
      left = Math.max(margin, Math.min(left, vw - p.width - margin));

      // Vertikal placering
      const top = placement === "top"
        ? t.top - p.height - offset
        : t.bottom + offset;

      setPos({ left, top, placement });
    };

    calc();
    // Recalc ved resize og scroll
    const onScroll = () => calc();
    window.addEventListener("resize", calc);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("resize", calc);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [open, triggerRef, popupRef, offset]);

  return pos;
}
