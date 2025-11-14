import { useState, useRef } from "react";
import Tooltip from "../Tooltip/Tooltip";
import { useTooltipPosition } from "../Tooltip/useTooltipPosition";

export default function HoverText({ children, title = "More information", text = children, color = "blue", variant = "bold" }) {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  const hideRef = useRef(null);
  const showRef = useRef(null);

  const triggerRef = useRef(null);
  const popupRef = useRef(null);

  const { left, top, placement } = useTooltipPosition({
    open: visible,
    triggerRef,
    popupRef,
    offset: 10
  });

  const startShow = () => {
    console.log('startShow called'); // --- DEBUG ---
    clearTimeout(hideRef.current);

    if (!visible) {
      showRef.current = setTimeout(ensureShown, 300);
    }
  }

  const ensureShown = () => {
    clearTimeout(hideRef.current);
    setHiding(false);
    setVisible(true);
  };

  const startHide = () => {
    console.log('startHide called'); // --- DEBUG ---
    clearTimeout(hideRef.current);
    clearTimeout(showRef.current);

    hideRef.current = setTimeout(setHidingAfterDelay, 500);
  };

  const setHidingAfterDelay = () => {
    console.log('setHideEffective called'); // --- DEBUG ---

    const trigger = triggerRef.current;
    const hovered = (trigger && trigger.matches(":hover"));
    console.log('hovered status:', hovered); // --- DEBUG ---

    if (hovered) {
      // Mouse is back over one of them → cancel hide
      setHiding(false);
      setVisible(true);
      return;
    }

    setHiding(true);
  }

  const cancelHide = () => {
    console.log('cancelHide called'); // --- DEBUG ---
    clearTimeout(hideRef.current);
    setHiding(false);
  };

  const onTransitionEnd = () => {
    console.log('onTransitionEnd called'); // --- DEBUG ---
    if (hiding) {
      setVisible(false);
      setHiding(false);
    }
  };

  return (
    <>
      <span
        tabIndex={0}
        className="hover-text-wrapper"
        onMouseEnter={startShow}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (visible) {
              setHiding(true);
            } else {
              startShow(e);
            }
          }
        }}
        onMouseLeave={startHide}
        ref={triggerRef}
      >
        {children}
      </span>

      {
        visible && (
          <div
            ref={popupRef}
            className={`tooltip-portal ${hiding ? "fade-out" : "fade-in"} ${placement}`}
            style={{ left, top }}
            onMouseEnter={cancelHide}
            onMouseLeave={startHide}
            onTransitionEnd={onTransitionEnd}

          >
            <Tooltip
              title={title}
              text={text}
              color={color}
              variant={variant}
              onClose={() => {
                clearTimeout(hideRef.current);
                setHiding(true);
                triggerRef.current.focus();
              }}
            />
          </div>
        )
      }
    </>
  );
}
