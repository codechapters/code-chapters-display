import React from "react";

export function CodeChaptersMark({
  width = 29,
  height = 25,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 116 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left primary angled chapter facet */}
      <path d="M0 100L45 0H75L30 100H0Z" fill="currentColor" />
      {/* Right companion chapter facet */}
      <path d="M41 100L86 0H116L71 100H41Z" fill="currentColor" />
      {/* Architectural fold bevel for subtle 3D depth */}
      <path d="M71 100L116 0H106L61 100H71Z" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}
