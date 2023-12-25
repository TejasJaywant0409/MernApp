import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carausal from "../Components/Carausal";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carausal />
      <div className="m-2">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
