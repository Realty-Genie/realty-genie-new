"use client";

import { useSyncExternalStore } from "react";

export type FloatingKey = "chatbot" | "whatsapp" | null;

let active: FloatingKey = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function setActiveFloating(key: FloatingKey) {
  if (active === key) return;
  active = key;
  emit();
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

function getSnapshot(): FloatingKey {
  return active;
}

function getServerSnapshot(): FloatingKey {
  return null;
}

export function useActiveFloating(): FloatingKey {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
