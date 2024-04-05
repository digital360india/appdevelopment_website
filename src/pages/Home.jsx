import React from "react";
import SomeThing from "../components/SomeThing";
import Card from "../components/card";
import Clints from "../components/Clints";
import NewAnimation from "../components/NewAnimation";
import Hero from "../components/Hero";
import Industries from "../components/Industries";
import Cms_solutions from "../components/Cms_solutions";
import Approach from "../components/Approach";
import Talk from "../components/Talk";
import MainHero from "../components/MainHero";

export default function Home() {
  return (
    <div>
      <MainHero />
      <NewAnimation />
      <Industries />
      <Cms_solutions />
      <Card />
      <Clints />
      <Approach />
      <SomeThing />
      <Talk />
    </div>
  );
}
