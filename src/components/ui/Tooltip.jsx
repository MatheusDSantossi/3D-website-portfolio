const Tooltip = ({ children, tooltipsText, position, childrenMargin }) => {
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  // Parse percentage like "95%" or "95"
  const pct = parseFloat(String(childrenMargin).replace("%", "")) || 0;
  const clampedPct = clamp(pct, 0, 100);

  const leftPercent = `${clampedPct}%`;

  const toolTipClass =
    position === "right"
      ? `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-primary dark:bg-primary-light px-4 py-[6px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`
      : position === "left"
      ? `absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded bg-primary dark:bg-primary-light px-4 py-[6px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`
      : position === "bottom"
      ? `absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-primary dark:bg-primary-light px-4 py-[6px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`
      : // Top position is default
        `absolute bottom-full z-20 mb-8 -translate-x-1/4 whitespace-nowrap rounded bg-primary dark:bg-primary-light px-4 py-[6px] text-sm font-semibold text-white dark:text-primary opacity-0 group-hover:opacity-100`;

  const arrowClass =
    position === "right"
      ? `absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-primary dark:bg-primary-light`
      : position === "left"
      ? `absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-primary dark:bg-primary-light`
      : position === "bottom"
      ? `absolute left-1/2 top-[-3px] -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary dark:bg-primary-light`
      : // Top position is default
        `absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary dark:bg-primary-light`;

  return (
    <div className="inline-block">
      <div className="group relative inline-block">
        {/* Children are rendered in-flow, not absolutely positioned by the Tooltip  */}
        <div className={`inline-flex ml-32 px-3 left-[${childrenMargin}]`}>
          {children}
        </div>
        <div
          className={toolTipClass}
          style={{
            left: leftPercent,
            transform: "translateX(-50%)",
            zIndex: 50,
          }}
        >
          <span className={arrowClass}></span>
          {tooltipsText}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
