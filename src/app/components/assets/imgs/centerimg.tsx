import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={399}
    height={145}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h399v145H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.00176 0 0 .00485 -.053 -.097)" />
      </pattern>
      <image
        id="b"
        width={626}
        height={414}
      />
    </defs>
  </svg>
)
export default SvgComponent