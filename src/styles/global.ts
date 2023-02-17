import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    backgroundColor: "#1e90ff",
    color: "White",
    "-webkit-font-smoothing": "antialiased",
  },
  "body, p, input, textarea, button": {
    fontWeight: 400,
    fontFamily:
      "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
  },
});
