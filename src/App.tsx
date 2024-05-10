import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HeadlineCard } from "./components/HeadlineCards";

export function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard />
    </div>
  );
}
