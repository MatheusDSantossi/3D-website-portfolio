import { motion } from "framer-motion";
import computerDev from "../../assets/icons/computer-dev.svg";
import { useMemo, useState } from "react";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

const ProgressBar = ({ value }) => {
  // Accept number or percent string
  const numeric = typeof value === "number" ? value : parseFloat(value);
  const pct = Number.isFinite(numeric) ? numeric : 0;

  // Clamp so icon doesn't overflow extremes (3%..97%)
  const clampedPct = clamp(pct, 3, 97);

  const width = `${pct}%`;
  const iconLeft = `${clampedPct}%`; // used for left positioning (centered by translateX)

  const gradient = useMemo(
    () => "linear-gradient(90deg, #7c3aed 0%, #a78bfa 60%, #c4b5fd 100%)",
    []
  );

  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      className={`w-full h-4 rounded-full overflow-hidden bg-tertiary`}
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

      {/* Icon positioned above the fill edge (centered at the fill's rightmost point) */}
      {/* We place the icon in the outer container (not inside the fill) so it visually floats above */}
      <div
        className="absolute top-0"
        style={{
          left: iconLeft,
          top: "-22px", // move the icon above the bar; tweak as needed
          transform: "translateX(-50%)",
          zIndex: 20,
          pointerEvents: "auto",
        }}
      >
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip above icon */}
          {showTooltip && (
            <div
              className="absolute bottom-full mb-2 whitespace-nowrap text-xs px-2 py-1 rounded"
              style={{
                background: "rgba(0,0,0,0.75)",
                color: "#fff",
                transform: "translateX(-50%)",
                left: "50%",
                zIndex: 30,
              }}
            >
              {width}
            </div>
          )}

          <img
            src={computerDev}
            alt="icon"
            className="w-6 h-6 select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
