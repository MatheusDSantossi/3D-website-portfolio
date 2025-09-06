import { motion } from "framer-motion";
import { useMemo } from "react";
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

  // linear-gradient(to right, #c31432, #240b36);
  // linear-gradient(to right, #005aa7, #fffde4);

  const gradient = useMemo(
    () => "linear-gradient(90deg, #005aa7 0%, #326FA4FF 60%, #fffde4 100%)",
    []
  );
  // const gradient = useMemo(
  //   () => "linear-gradient(90deg, #c31432 0%, #240b36 60%, #050816 100%)",
  //   []
  // );

  return (
    <div
      className={`w-full h-4 rounded-full overflow-hidde bg-gray-600 dark:bg-gray-600`}
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
        <Tooltip position={"top"} tooltipsText={width} childrenMargin={width}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              left: iconLeft,
              transform: "translateX(-50%)",
              top: "-21px",
              zIndex: 40,
            }}
          >
            <path
              className="stroke-secondary-light dark:stroke-secondary-light"
              d="M8.5 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V13.5C1 13.8978 1.15804 14.2794 1.43934 14.5607C1.72064 14.842 2.10218 15 2.5 15H17.5C17.8978 15 18.2794 14.842 18.5607 14.5607C18.842 14.2794 19 13.8978 19 13.5V8.5M10 15V19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="stroke-secondary-light  dark:stroke-secondary-light"
              d="M14 1L12 3L14 5M17 1L19 3L17 5M5 19H15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          
        </Tooltip>
      </div>
    </div>
  );
};
export default ProgressBar;
