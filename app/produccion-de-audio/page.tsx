"use client";

import React from "react";
import { Image } from "@nextui-org/react";

export default function ProduccionAudio() {
  return (
    <>
      <div>
        <h1>Produccion de Audio</h1>
      </div>
      <div className="flex justify-center">
        <Image
          isZoomed
          width={480}
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
        />
      </div>
    </>
  );
}
