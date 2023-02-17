import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",
});
export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 400,

  background: "linear-gradient(180deg, whitesmoke 0%, #1e90ff 100%)",
  borderRadius: "0.5rem",
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: { objectFit: "cover" },
});
export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "white",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$xl",
    color: "whitesmoke",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
  },

  button: {
    marginTop: "auto",
    backgroundColor: "whitesmoke",
    border: 0,
    color: "#1e90ff",
    borderRadius: "0.5rem",
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",
    transition: "opacity 0.2s",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      opacity: 0.9,
    },
  },
});
export const Loading = styled("p", {
  fontSize: "$2xl",
  textAlign: "center",
  margin: "0 auto",
  fontWeight: "bold",
});
