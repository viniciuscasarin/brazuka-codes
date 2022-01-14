import * as React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#000",
        fillOpacity: 1,
      }}
      d="M11.113 0 13 1.887 6.773 8.004 13 14.114 11.113 16 3 8.004Zm0 0"
    />
  </svg>
)

export default SvgComponent