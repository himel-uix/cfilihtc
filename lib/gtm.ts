declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export function generateEventId(): string {
  if (typeof window !== 'undefined' && typeof window.crypto?.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};
