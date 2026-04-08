const theme = {
  title: "dark",
  colors: {
    // Backgrounds
    bg: "#0D1117",
    bgCard: "#161B22",
    bgSidebar: "rgba(22, 27, 34, 0.85)",
    bgInput: "#1C2128",
    bgHover: "#21262D",

    // Text
    white: "#FFFFFF",
    textPrimary: "#E6EDF3",
    textSecondary: "#8B949E",
    textMuted: "#484F58",

    // Brand accent — esmeralda financeiro
    emerald: "#00D4AA",
    emeraldDim: "rgba(0, 212, 170, 0.15)",
    emeraldGlow: "rgba(0, 212, 170, 0.3)",

    // Borders
    border: "rgba(255, 255, 255, 0.08)",
    borderHover: "rgba(0, 212, 170, 0.4)",
    borderActive: "#00D4AA",

    // Status
    success: "#3FB950",
    warning: "#D29922",
    error: "#F85149",

    // Legacy (manter compatibilidade com componentes que ainda usam)
    black: "#E6EDF3",
    black100: "#C9D1D9",
    gray100: "#8B949E",
    gray200: "#6E7681",
    gray300: "#484F58",
    gray400: "#30363D",
    ice: "rgba(255, 255, 255, 0.08)",
    white100: "#1C2128",
    white200: "#161B22",
    white300: "#0D1117",
    blue: "#58A6FF",
    pink: "#00D4AA",
    pink100: "#00B894",
    pink200: "#00D4AA",
    pink300: "rgba(0, 212, 170, 0.5)",
  }
} as const;

export type MyTheme = typeof theme;

export default theme;