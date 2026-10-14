import type { KeyboardEvent } from "react";

/* Setas, Home e End movem o foco entre as abas irmãs e ativam a nova aba */
export function onTabKeyDown(e: KeyboardEvent<HTMLElement>) {
  const tabs = [...(e.currentTarget.parentElement?.querySelectorAll<HTMLElement>('[role="tab"]') ?? [])];
  const i = tabs.indexOf(e.currentTarget);
  const next =
    e.key === "ArrowRight" || e.key === "ArrowDown" ? tabs[(i + 1) % tabs.length]
    : e.key === "ArrowLeft" || e.key === "ArrowUp" ? tabs[(i - 1 + tabs.length) % tabs.length]
    : e.key === "Home" ? tabs[0]
    : e.key === "End" ? tabs.at(-1)
    : undefined;
  if (!next) return;
  e.preventDefault();
  next.focus();
  next.click();
}
