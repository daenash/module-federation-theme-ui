import { ThemeProvider } from "theme-ui";

// Theme wrapper on remote, so the remote can be tested separately
const ThemeWrapper = ({ children }) => (
  <ThemeProvider
    theme={{
      breakpoints: ["400px", "500px", "600px"],
    }}
  >
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;
