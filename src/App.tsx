import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HeadlineCard } from "./components/HeadlineCards";
import { Food } from "./components/Food";
import { Category } from "./components/Category";

export function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
    </div>
  );
}
