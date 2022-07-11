import { Eye } from "../Assets/Eye";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 5;

export const Face = () => (
  <svg width={width} height={height}>
    <circle
      cx={centerX}
      cy={centerY}
      r={centerY - strokeWidth / 2}
      fill="yellow"
      stroke="black"
      strokeWidth={strokeWidth}
    ></circle>
    <Eye></Eye>
  </svg>
);
