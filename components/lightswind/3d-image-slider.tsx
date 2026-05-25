// @ts-nocheck
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const DEFAULT_DATA = [
  "https://cdn.dribbble.com/userupload/17828262/file/original-aa258036ac6130cc829db1436efb9f0f.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/46396178/file/85d4c9408dc17c4ae7be0e21a80b2b62.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/18025526/file/original-546d5474fa23eb7573be95cc954eedb5.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/19809905/file/original-a138d2649434b1c59f917ffe687c5c9a.jpg?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/43704658/file/original-6c1002c44e68904285f52b4aeb87017e.jpg?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/46968915/file/cb9bbd7db69817d8d6578bf98cc0f117.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/18414845/file/original-2ebe7a713bc12cf01f583fc0b06ee5d6.webp?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/44306301/file/ed4f8395bc6144cba17396658dbffa3f.png?resize=1504x1128&vertical=center",

  "https://cdn.dribbble.com/userupload/47817103/file/11f57416153e0d8a6f6100b93145cae7.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/47710930/file/da79dac620b4db3f53b544dbe2630d91.png?resize=1024x768&vertical=center"

];

interface Slider3DProps {
  /** Array of image URLs to display */
  images?: string[];
  /** Duration of one full 360-degree rotation (in seconds) */
  duration?: number;
  /** Width of each card. Can be px, rem, em, etc. */
  cardWidth?: string;
  /** CSS aspect ratio of the cards */
  cardAspectRatio?: string;
  /** CSS perspective value for the 3D container */
  perspective?: string;
  /** Additional classes for the outermost container */
  containerClassName?: string;
  /** Additional classes for the individual image elements */
  imageClassName?: string;
  /** Direction of the rotation */
  rotationDirection?: "left" | "right";
  /** Whether to apply a gradient fade mask on the edges */
  withMask?: boolean;
}

export default function ImageSlider3D({
  images = DEFAULT_DATA,
  duration = 32,
  cardWidth = "17.5em",
  cardAspectRatio = "7/10",
  perspective = "35em",
  containerClassName = "",
  imageClassName = "",
  rotationDirection = "left",
  withMask = true,
}: Slider3DProps) {
  const n = images.length;
  const prefersReducedMotion = useReducedMotion();
  const animationDuration = prefersReducedMotion ? duration * 4 : duration;

  // rotation angles based on direction
  const rotationValues = rotationDirection === "left" ? [0, 360] : [360, 0];

  const maskStyles = withMask
    ? {
      WebkitMask:
        "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
      mask: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
    }
    : {};

  return (
    <div
      className={`grid w-full h-full min-h-[500px] overflow-hidden place-items-center ${containerClassName}`}
      style={{
        perspective: perspective,
        ...maskStyles,
      }}
    >
      <motion.div
        className="grid place-self-center pointer-events-auto"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: rotationValues,
        }}
        transition={{
          duration: animationDuration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className={`col-start-1 row-start-1 object-cover rounded-[1.5em] ${imageClassName}`}
            style={{
              width: cardWidth,
              aspectRatio: cardAspectRatio,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: `rotateY(calc(${i} * (1turn / ${n}))) translateZ(calc(-1 * (0.5 * ${cardWidth} + 0.5em) / tan(0.5 * (1turn / ${n}))))`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
