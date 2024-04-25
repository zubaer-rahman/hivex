export default function BarSvg({ height = 11, width = 34, fill = "white" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width} // added size here
      height={height} // added size here
      fill={fill} // added color here
    >
      <path d="M34 0.5H5L0 10.5H29L34 0.5Z" fill={fill} />
    </svg>
  );
}
