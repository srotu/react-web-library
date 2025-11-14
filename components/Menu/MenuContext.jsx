import { useContext } from "react";
import { MenuContext } from "./Menu";

// A convenience hook to access menu API
export function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be used inside a <Menu>");
  return ctx;
}