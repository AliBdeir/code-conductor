const localStorageMock = (() => {
    const store: { [key: string]: string } = {};
  
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      }
    };
  })();
  
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });