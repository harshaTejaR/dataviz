import { BackgroundCircle } from "../Assets/BackgroundCircle";
import { Eye } from "../Assets/Eye";
import { MouthArc } from "../Assets/MouthArc";
import { FaceContainer } from "../Assets/FaceContainer";

export const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthRadius,
  mouthWidth,
}) => (
  <FaceContainer
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
  >
    <BackgroundCircle
      radius={centerY - strokeWidth / 2}
      strokeWidth={strokeWidth}
    />
    <Eye
      eyeOffsetX={eyeOffsetX}
      eyeOffsetY={eyeOffsetY}
      eyeRadius={eyeRadius}
    />
    <MouthArc mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
  </FaceContainer>
);
