import { ThemeProvider, type DefaultTheme } from "styled-components";

const theme = {
  colors: {
    primary: "#b19cd9", // light purple color
    secondary: "#927fb6", // dark purple color
    error: "#ff0000", // red color
    success: "#00ff00", // green color
    bg: "#242424", // dark grey color
    text: "#ffffffde", // white color with opacity
  },
} satisfies DefaultTheme;

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
