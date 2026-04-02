declare global {
  interface Window {
    crmTracker?: {
      track: (event: string, data?: Record<string, string | number | boolean>) => void;
      identify: (email: string, name?: string, phone?: string, city?: string) => Promise<void>;
    };
  }
}

export {};
