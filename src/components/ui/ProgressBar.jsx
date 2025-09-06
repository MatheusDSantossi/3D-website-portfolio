import { motion } from "framer-motion";
import computerDev from "../../assets/icons/computer-dev.svg";
import { useMemo, useState } from "react";
import Tooltip from "./Tooltip";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

const ProgressBar = ({ value }) => {
  // TODO: add a mouse animation inside the progressbar (like the color changing or something like that)

  // Accept number or percent string
  const numeric = typeof value === "number" ? value : parseFloat(value);
  const pct = Number.isFinite(numeric) ? numeric : 0;

  // Clamp so icon doesn't overflow extremes (3%..97%)
  const clampedPct = clamp(pct, 3, 97);

  const width = `${pct}%`;
  const iconLeft = `${clampedPct}%`; // used for left positioning (centered by translateX)

  const gradient = useMemo(
    () => "linear-gradient(90deg, #050816 0%, #151030 60%, #ffffff 100%)",
    []
  );

  return (
    <div
      className={`w-full h-4 rounded-full overflow-hidde bg-tertiary`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Track background stays full width */}
      <div className="absolute inset-0 rounded-full pointer-events-none" />
      {/* Filled bar (motion for smooth width animation) */}
      <motion.div
        className="h-full rounded-full relative"
        initial={{ width: 0 }}
        animate={{ width }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          background: gradient,
          willChange: "width",
        }}
      />
      <div className=" -top-5">
        <Tooltip 
        position={"top"} 
        tooltipsText={width}
        childrenMargin={width}
        >
          <img
            src={computerDev}
            alt="icon"
            className="test w-6 h-6 select-none"
            style={{
              position: "absolute",
              left: iconLeft,
              transform: "translateX(-50%)",
              top: "-21px",
              zIndex: 40,
            }}
            draggable={false}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          />
        </Tooltip>
      </div>
    </div>
  );
};
export default ProgressBar;
