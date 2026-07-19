import { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Interior Solutions | NARVO Hardware",
  description: "Explore tailored architectural hardware and space solutions for residential, commercial, and hospitality interiors. Handcrafted in solid brass.",
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
