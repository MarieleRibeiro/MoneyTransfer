const theme = {
  title: "default",
  colors: {
    black: "#1F2933",
    black100: "#323F4B",
    gray100: "#3E4C59",
    gray200: "#52606D",
    gray300: "#616E7C",
    gray400: "#c4c4c4",
    ice: "#E4E7EB",
    white: "#FFFFFF",
    white100: "#F5F7FA",
    white200: "#FFF6F9",
    white300: "#FBFEFF",
    blue: "#151E4B",
    pink: "#E8368F",
    pink100: "#DA127D",
    pink200: "#F364A2",
    pink300: "#FF8CBA"
  }
} as const;

export type MyTheme = typeof theme;

export default theme;