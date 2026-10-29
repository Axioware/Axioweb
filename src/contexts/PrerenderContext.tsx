import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const PrerenderContext = createContext(false);

export function PrerenderProvider({
  initialValue,
  children,
}: {
  initialValue: boolean;
  children: ReactNode;
}) {
  const [isInitialPrerender, setIsInitialPrerender] = useState(initialValue);

  useEffect(() => {
    setIsInitialPrerender(false);
  }, []);

  return (
    <PrerenderContext.Provider value={isInitialPrerender}>
      {children}
    </PrerenderContext.Provider>
  );
}

export function useIsInitialPrerender() {
  return useContext(PrerenderContext);
}
