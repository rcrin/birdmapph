"use client";
import MapSVG from "./MapSVG";
import { useEffect, useRef } from "react";
import { useAppSelector } from "@/redux/store";

const PHMap = () => {
  const bird = useAppSelector((state) => state.birdReducer.value);
  const mapRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let locations = bird.location;

    if (mapRef.current) {
      let items = mapRef.current.querySelectorAll("svg path");

      [...items].map((location: any) => {
        if (locations?.includes(location.getAttribute("name"))) {
          location.setAttribute("fill", "#F4970B");
        } else {
          location.setAttribute("fill", "#a9a9a9");
        }
      });

      // let filtered = [...items].filter((location: any) => {
      //   return locations?.includes(location.getAttribute("name"));
      // });

      // filtered.map((location) => {
      //   location.setAttribute("fill", "#F4970B");
      // });
    }
  }, [bird]);

  const handleRegionClick = (event: any) => {
    const regionName = event.target.getAttribute("name");
    const regionId = event.target.getAttribute("id");
    if (regionId !== null) {
      alert(`${regionId} ${regionName}`);
    }
  };

  return (
    <div
      className="relative w-auto h-auto svg-container"
      onClick={handleRegionClick}
    >
      <MapSVG ref={mapRef} />
    </div>
  );
};

export default PHMap;
