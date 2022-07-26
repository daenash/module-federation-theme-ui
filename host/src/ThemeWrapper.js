import { ThemeProvider } from "theme-ui";

// Theme wrapper on host
const ThemeWrapper = ({ children }) => (
  <ThemeProvider
    theme={{
      breakpoints: ["900px", "1000px", "1100px"],
    }}
  >
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;
