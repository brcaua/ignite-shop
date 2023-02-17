import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
  },

  p: {
    fontSize: "$xl",
    maxWidth: 568,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "5rem",
    display: "block",
    textDecoration: "none",
    color: "white",
    fontSize: "$lg",
    fontWeight: "bold",

    "&:hover": {
      color: "wheat",
    },
  },
});
export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  background: "linear-gradient(180deg, whitesmoke 0%, #1e90ff 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
