const Wavesvg = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10 hidden md:block"
      opacity="0.38"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
    >
      <g mask='url("#SvgjsMask1107")' fill="none">
        <path
          d="M 0,411 C 96,361 288,184 480,161 C 672,138 768,284.4 960,296 C 1152,307.6 1344,234.4 1440,219L1440 560L0 560z"
          fill="rgba(162, 223, 140, 1)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1107">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  );
};

export default Wavesvg;
