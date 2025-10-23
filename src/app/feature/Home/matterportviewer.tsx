"use client";
import React, { useEffect, useRef } from "react";

type modelProps = {
  modelID: string,
  sdkKey: string
}

const MatterPortViewer = ({ modelID, sdkKey }: modelProps) => {
  return (
    <section className="flex justify-center">
      <iframe
        className="w-full h-120 md:h-screen"
        src={`https://my.matterport.com/show/?m=${modelID}&play=1`}
        allow="fullscreen; vr; xr-spatial-tracking"
        id="showcase-iframe"
      ></iframe>
    </section>
  );
};

export default MatterPortViewer;
