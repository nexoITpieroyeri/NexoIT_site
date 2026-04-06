import React from 'react';

const BorderBeam = ({
  size = 300,
  duration = 12,
  anchor = 90,
  borderWidth = 2,
  colorFrom = "#2ef59a",
  colorTo = "#43c8ff",
  delay = 0,
  className = "",
}) => {
  return (
    <div
      style={{
        "--size": size,
        "--duration": duration,
        "--anchor": anchor,
        "--border-width": borderWidth,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      }}
      className={`border-beam-wrapper ${className}`}
    >
      <div className="border-beam-spin" />
    </div>
  );
};

export default BorderBeam;
