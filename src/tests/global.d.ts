// global.d.ts
export {};

declare global {
  namespace NodeJS {
    interface Global {
      localStorage: {
        storage: Record<string, string>;
        setItem: (key: string, value: string) => void;
        getItem: (key: string) => string | null;
        removeItem: (key: string) => void;
        clear: () => void;
      };
    }
  }
}
