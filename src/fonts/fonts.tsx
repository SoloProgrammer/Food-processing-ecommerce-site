import { Aboreto, Roboto, } from "next/font/google";

export const aboreto = Aboreto({
  weight: ["400"],
  subsets: ["latin-ext"],
});

export const roboto = Roboto({
  weight: ["400", "100", "300", "500"],
  subsets: ["latin-ext"],
});
