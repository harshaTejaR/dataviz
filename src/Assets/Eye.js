
const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const eyeOffsetX = 90;
const eyeOffsetY = 90;

const eyeRadius = 50;

export const Eye = () => (
  <svg>
    <circle cx={centerX - eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius}></circle>
    <circle cx={centerX + eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius}></circle>
  </svg>
);
