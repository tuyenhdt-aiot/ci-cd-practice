import React from "react";
import { GoodComponent } from "../components/GoodComponent";
// import { BadComponent } from "@/components/BadComponent"; 

export default function Home() {
  return (
    <div>
      <h1>CI/CD Demo</h1>
      <GoodComponent />
      {/* <BadComponent /> */}
    </div>
  );
}
