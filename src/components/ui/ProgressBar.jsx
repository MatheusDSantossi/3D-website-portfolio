import { motion } from "framer-motion";

const ProgressBar = ({ value }) => {
  const width = typeof value === "number" ? `${value}%` : value;

  return (
    <div
      className="w-full h-4 bg-tertiary rounded-full overflow-hidden"
      role="progressbar"
      aria-valuenow={typeof value === "number" ? value : undefined}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full bg-secondary-light"
        style={{
          width,
        }}
        onViewportLeave={0}
        onViewportEnter={width}
        whileInView={{
          transition: "width 500ms ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
