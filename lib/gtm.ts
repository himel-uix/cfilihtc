declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};
