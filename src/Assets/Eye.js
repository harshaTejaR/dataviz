export const Eye = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
  <>
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
    />
    <circle
      cx={eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
    />
  </>
);