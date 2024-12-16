import * as React from "react"
const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={949}
    height={1077}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h949v1077H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.00272 0 0 .0024 -.317 -.061)" />
      </pattern>
      <image
        id="b"
        width={600}
        height={750}
      />
    </defs>
  </svg>
)
export default SvgComponent