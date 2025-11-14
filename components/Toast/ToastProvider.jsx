import { createContext, useContext, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Toast from "./Toast";

const ToastContext = createContext(null);

let idSeq = 0;

export default function ToastProvider({ children, placement = "top-right", maxToasts = 6 }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef(new Map());
  const paused = useRef(false);

  function remove(id) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }

  function push({ type = "info", title, text, duration = 4000 }) {
    const id = ++idSeq;
    setToasts((prev) => [{ id, type, title, text }, ...prev].slice(0, maxToasts));
    const timer = setTimeout(() => {
      if (!paused.current) remove(id);
    }, duration);
    timers.current.set(id, timer);
  }

  function pauseAll() {
    console.log("pausing toasts");
    paused.current = true;
    for (const [, t] of timers.current) clearTimeout(t);
    timers.current.clear();
  }

  function resumeAll() {
    console.log("resuming toasts");
    paused.current = false;
    // Start nye timere for de toasts der stadig er synlige
    setToasts((prev) => {
      for (const toast of prev) {
        const timer = setTimeout(() => remove(toast.id), 2000); // 2 sek. grace efter hover
        timers.current.set(toast.id, timer);
      }
      return prev;
    });
  }

  const api = useMemo(() => {
    return {
      show: push,
      info: (opts) => push({ ...opts, type: "info" }),
      success: (opts) => push({ ...opts, type: "success" }),
      warning: (opts) => push({ ...opts, type: "warning" }),
      error: (opts) => push({ ...opts, type: "error" }),
      remove,
    };
  }, []);

  return (
    <ToastContext.Provider value={api}>
      {children}
      {createPortal(
        <div className={`toast-container toast-container--${placement}`}
          onMouseEnter={pauseAll}
          onMouseLeave={resumeAll}>
          {toasts.map((t) => (
            <div key={t.id} className="toast-item">
              <Toast type={t.type} title={t.title} text={t.text} />
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}
