import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import Tooltip from "./Tooltip";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

const ProgressBar = ({ value }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    () => "linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)",
    // () => "linear-gradient(90deg, #005aa7 0%, #326FA4FF 60%, #fffde4 100%)",
    []
  );

  return (
    <div
      ref={ref}
      className={`w-full h-5 rounded-full bg-gray-300 dark:bg-gray-700 relative shadow-inner`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track background stays full width */}
      {/* <div className="absolute inset-0 rounded-full pointer-events-none" /> */}
      {/* Filled bar (motion for smooth width animation) */}
      <motion.div
        className="h-full rounded-full relative overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isInView ? width : 0, opacity: isInView ? 1 : 0 }}
        transition={{
          width: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.3 },
        }}
        style={{
          background: gradient,
          boxShadow: isHovered
            ? "0 0 20px rgba(102, 126, 234, 0.6)"
            : "0 0 10px rgba(102, 126, 234, 0.3)",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ x: "-100%" }}
          animate={{ x: isInView ? "200%" : "-100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            width: "50%",
          }}
        />
      </motion.div>

      {/* Icon with bounce animation */}
      <div
        style={{
          position: "absolute",
          left: iconLeft,
          transform: "translateX(-50%)",
          top: "-1px",
          width: "24px",
          zIndex: 400,
        }}
      >
        <Tooltip position={"top"} tooltipsText={width} childrenMargin={width}>
          <motion.div
            initial={{ scale: 0, y: -30, opacity: 0 }}
            animate={{
              scale: isInView ? 1 : 0,
              y: isInView ? 0 : -30,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              delay: 0.8,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            <motion.div
              animate={
                isHovered
                  ? {
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0],
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 0.2,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                }}
              >
                <motion.circle
                  cx="12"
                  cy="12"
                  r="11"
                  fill="url(#iconGradient)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                />
                <motion.path
                  d="M8 12l3 3 5-6"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient
                    id="iconGradient"
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                  >
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </Tooltip>
      </div>

      {/* Pulse effect at the end of progress */}
      {pct > 0 && (
        <motion.div
          className="absolute top-0 right-0 h-full w-1 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ffffff 50%, transparent 100%)",
            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
          }}
        />
      )}
    </div>
  );
};
export default ProgressBar;
