import { styled } from "..";
import Link from "next/link";

export const Title = styled("div", {
  display: "flex",
  alignSelf: "center",

  fontSize: "3rem",
  fontWeight: 900,

  marginTop: "-2rem",
  marginBottom: "2rem",
  marginRight: "4rem",
});

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 880px) / 2))",
  marginLeft: "auto",
  minHeight: 400,
});

export const Product = styled(Link, {
  background: "linear-gradient(180deg, whitesmoke 0%, #1e90ff 100%)",
  borderRadius: "0.5rem",
  cursor: "pointer",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
    marginBottom: "3rem",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",
    overflow: "hidden",

    borderRadius: "0.5rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "whitesmoke",
    color: "$gray800",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$md",
    },

    span: {
      fontSize: "$md",
      fontWeight: 900,
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
