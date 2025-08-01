"use client";
import React, { useEffect, useRef } from "react";

const MatterPortViewer = ({ modelID, sdkKey }) => {
  return (
    <section className="flex justify-center">
      <iframe
        className="w-full h-screen"
        src={`https://my.matterport.com/show/?m=${modelID}&play=1`}
        allow="fullscreen; vr; xr-spatial-tracking"
        id="showcase-iframe"
      ></iframe>
    </section>
  );
};

export default MatterPortViewer;
