'use client'

import { COLORS_SEKAI_KEYS, createSekai, LIGHT_MODE, YourSekaiProvider } from "@naru/untitled-library";

export function SekaiProvider({ children }: { children: React.ReactNode }) {
  const theme = createSekai({
    palette: {
      sekai: COLORS_SEKAI_KEYS.Miku,
      mode: LIGHT_MODE
    }
  });

  return (
    <YourSekaiProvider sekaiTheme={theme}>
      {children}
    </YourSekaiProvider>
  );
}