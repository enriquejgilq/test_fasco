import * as React from "react"
const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={394}
    height={187}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={373}
      height={136}
      x={10}
      y={26}
      fill="#000"
      maskUnits="userSpaceOnUse"
    >
      <path fill="#fff" d="M10 26h373v136H10z" />
      <path d="M57.074 160.309c-8.726 0-16.58-1.496-23.562-4.488-6.981-3.117-12.466-7.48-16.456-13.09-3.989-5.61-5.984-12.155-5.984-19.635h22.814c.499 5.61 2.68 10.223 6.545 13.838 3.99 3.615 9.537 5.423 16.643 5.423 7.356 0 13.09-1.745 17.204-5.236 4.114-3.615 6.171-8.228 6.171-13.838 0-4.363-1.309-7.916-3.927-10.659-2.493-2.743-5.672-4.862-9.537-6.358-3.74-1.496-8.976-3.117-15.708-4.862-8.477-2.244-15.396-4.488-20.757-6.732-5.236-2.369-9.724-5.984-13.464-10.846s-5.61-11.345-5.61-19.448c0-7.48 1.87-14.025 5.61-19.635 3.74-5.61 8.976-9.911 15.708-12.903 6.732-2.992 14.524-4.488 23.375-4.488 12.592 0 22.877 3.179 30.855 9.537 8.104 6.233 12.592 14.835 13.464 25.806H76.896c-.374-4.737-2.618-8.789-6.732-12.155-4.114-3.366-9.537-5.049-16.269-5.049-6.108 0-11.095 1.558-14.96 4.675-3.864 3.117-5.797 7.605-5.797 13.464 0 3.99 1.185 7.293 3.553 9.911 2.494 2.493 5.61 4.488 9.35 5.984 3.74 1.496 8.852 3.117 15.334 4.862 8.602 2.369 15.584 4.737 20.944 7.106 5.486 2.369 10.098 6.046 13.838 11.033 3.865 4.862 5.797 11.407 5.797 19.635 0 6.607-1.807 12.841-5.423 18.7-3.49 5.859-8.664 10.597-15.52 14.212-6.733 3.491-14.711 5.236-23.937 5.236Zm138.103-27.863H140.76L131.41 159h-22.253L155.72 28.848h24.684L226.967 159h-22.44l-9.35-26.554Zm-5.984-17.391-21.131-60.401-21.318 60.401h42.449Zm69.052 26.741h43.945V159h-65.263V29.035h21.318v112.761Zm72.806-95.557v38.148h44.88v17.391h-44.88v39.831h50.49V159h-71.808V28.848h71.808v17.391h-50.49Z" />
    </mask>
    <path
      fill="#484848"
      d="m33.512 155.821-.407.913.007.003.006.003.394-.919Zm-16.456-13.09.815-.58-.815.58Zm-5.984-19.635v-1h-1v1h1Zm22.814 0 .996-.089-.08-.911h-.916v1Zm6.545 13.838-.683.73.006.006.006.005.671-.741Zm33.847.187.647.763.007-.006.007-.006-.66-.751Zm2.244-24.497-.74.673.009.009.008.008.723-.69Zm-9.537-6.358-.371.929.01.004.361-.933Zm-15.708-4.862-.256.967.005.001.251-.968ZM30.52 94.672l-.412.911.013.006.013.005.386-.922ZM17.056 44.743l.832.555-.832-.555ZM32.764 31.84l.406.914-.406-.914Zm54.23 5.049-.623.782.007.005.007.006.61-.793Zm13.464 25.806v1h1.083l-.086-1.08-.997.08Zm-23.562 0-.997.079.073.921h.924v-1Zm-37.96-12.529.627.778-.628-.778ZM36.69 73.541l-.741.67.017.02.017.017.707-.707Zm9.35 5.984.372-.928-.372.928Zm15.334 4.862.266-.964-.006-.002-.26.966Zm20.944 7.106-.404.915.008.003.396-.918Zm13.838 11.033-.8.6.009.011.008.011.783-.622Zm.374 38.335-.85-.525-.005.007-.004.006.86.512Zm-15.52 14.212.46.888.006-.003-.467-.885Zm-23.937 4.236c-8.61 0-16.328-1.476-23.168-4.407l-.788 1.838c7.123 3.053 15.114 4.569 23.956 4.569v-2Zm-23.154-4.401c-6.837-3.052-12.174-7.308-16.049-12.757l-1.63 1.16c4.104 5.771 9.738 10.242 16.864 13.423l.815-1.826Zm-16.049-12.757c-3.858-5.425-5.799-11.764-5.799-19.055h-2c0 7.669 2.05 14.42 6.17 20.215l1.63-1.16Zm-6.799-18.055h22.814v-2H11.072v2Zm21.818-.911c.52 5.837 2.802 10.684 6.858 14.479l1.367-1.46c-3.673-3.436-5.754-7.814-6.233-13.197l-1.992.178Zm6.87 14.49c4.225 3.829 10.041 5.682 17.314 5.682v-2c-6.939 0-12.218-1.763-15.971-5.164l-1.343 1.482Zm17.314 5.682c7.507 0 13.5-1.782 17.851-5.473l-1.294-1.526c-3.877 3.29-9.352 4.999-16.557 4.999v2Zm17.865-5.485c4.335-3.81 6.51-8.699 6.51-14.589h-2c0 5.33-1.939 9.667-5.83 13.087l1.32 1.502Zm6.51-14.589c0-4.579-1.38-8.393-4.203-11.349l-1.447 1.38c2.413 2.529 3.65 5.821 3.65 9.969h2Zm-4.187-11.332c-2.61-2.87-5.924-5.072-9.916-6.618l-.722 1.866c3.738 1.446 6.781 3.483 9.158 6.098l1.48-1.346Zm-9.905-6.613c-3.798-1.519-9.08-3.152-15.829-4.902l-.502 1.936c6.716 1.741 11.905 3.349 15.588 4.822l.743-1.856Zm-15.824-4.901C43.08 98.2 36.21 95.969 30.906 93.75l-.772 1.844c5.419 2.269 12.386 4.526 20.887 6.777l.512-1.934Zm-20.6-6.676c-5.077-2.296-9.437-5.804-13.084-10.545l-1.585 1.22c3.833 4.983 8.448 8.706 13.844 11.147l.825-1.822ZM17.849 83.216c-3.568-4.638-5.403-10.884-5.403-18.838h-2c0 8.253 1.906 14.972 5.818 20.058l1.585-1.22Zm-5.403-18.838c0-7.305 1.824-13.652 5.442-19.08l-1.664-1.11c-3.861 5.792-5.778 12.535-5.778 20.19h2Zm5.442-19.08c3.626-5.438 8.707-9.622 15.282-12.544l-.812-1.828c-6.888 3.062-12.279 7.48-16.134 13.262l1.664 1.11ZM33.17 32.754c6.581-2.925 14.23-4.402 22.97-4.402v-2c-8.964 0-16.899 1.515-23.782 4.574l.813 1.828Zm22.97-4.402c12.419 0 22.468 3.133 30.231 9.319l1.247-1.564c-8.194-6.53-18.715-9.755-31.479-9.755v2Zm30.245 9.33c7.86 6.046 12.224 14.38 13.076 25.092l1.994-.158c-.893-11.229-5.505-20.1-13.851-26.52l-1.22 1.586Zm14.073 24.013H76.896v2h23.562v-2Zm-22.565.921c-.398-5.042-2.798-9.334-7.095-12.85l-1.267 1.548c3.93 3.216 6.018 7.028 6.368 11.46l1.994-.158Zm-7.095-12.85c-4.336-3.547-10.003-5.275-16.903-5.275v2c6.564 0 11.744 1.639 15.636 4.823l1.267-1.548Zm-16.903-5.275c-6.283 0-11.507 1.606-15.587 4.897l1.255 1.556c3.649-2.942 8.398-4.453 14.332-4.453v-2Zm-15.587 4.897c-4.144 3.341-6.17 8.141-6.17 14.242h2c0-5.618 1.84-9.794 5.425-12.686l-1.255-1.556Zm-6.17 14.242c0 4.203 1.255 7.756 3.812 10.582l1.483-1.342c-2.18-2.41-3.295-5.464-3.295-9.24h-2Zm3.846 10.618c2.602 2.602 5.838 4.666 9.686 6.206l.743-1.857c-3.632-1.453-6.63-3.378-9.015-5.763l-1.414 1.414Zm9.686 6.206c3.792 1.516 8.946 3.149 15.445 4.899l.52-1.932c-6.466-1.74-11.535-3.35-15.222-4.825l-.743 1.858Zm15.44 4.897c8.576 2.362 15.506 4.715 20.805 7.057l.808-1.83c-5.422-2.396-12.454-4.78-21.082-7.155l-.531 1.928Zm20.813 7.06c5.318 2.297 9.794 5.861 13.434 10.715l1.6-1.2c-3.84-5.12-8.589-8.91-14.241-11.351l-.793 1.836Zm13.451 10.737c3.685 4.635 5.58 10.937 5.58 19.013h2c0-8.38-1.969-15.168-6.014-20.257l-1.566 1.244Zm5.58 19.013c0 6.414-1.751 12.466-5.274 18.175l1.702 1.05c3.709-6.01 5.572-12.424 5.572-19.225h-2Zm-5.282 18.188c-3.384 5.681-8.411 10.298-15.128 13.839l.933 1.77c6.996-3.69 12.316-8.547 15.913-14.585l-1.718-1.024ZM80.55 154.185c-6.562 3.403-14.376 5.124-23.476 5.124v2c9.352 0 17.495-1.77 24.397-5.348l-.921-1.776Zm114.627-21.739.943-.332-.235-.668h-.708v1Zm-54.417 0v-1h-.708l-.235.668.943.332ZM131.41 159v1h.708l.235-.668-.943-.332Zm-22.253 0-.942-.337-.478 1.337h1.42v-1ZM155.72 28.848v-1h-.705l-.237.663.942.337Zm24.684 0 .941-.337-.237-.663h-.704v1ZM226.967 159v1h1.42l-.479-1.337-.941.337Zm-22.44 0-.943.332.235.668h.708v-1Zm-15.334-43.945v1h1.409l-.465-1.33-.944.33Zm-21.131-60.401.944-.33-.94-2.686-.947 2.683.943.333Zm-21.318 60.401-.943-.333-.471 1.333h1.414v-1Zm48.433 16.391H140.76v2h54.417v-2Zm-55.36.668-9.35 26.554 1.886.664 9.35-26.554-1.886-.664ZM131.41 158h-22.253v2h22.253v-2Zm-21.312 1.337 46.563-130.152-1.883-.674-46.563 130.152 1.883.674ZM155.72 29.848h24.684v-2H155.72v2Zm23.742-.663 46.563 130.152 1.883-.674-46.563-130.152-1.883.674ZM226.967 158h-22.44v2h22.44v-2Zm-21.497.668-9.35-26.554-1.886.664 9.35 26.554 1.886-.664Zm-15.333-43.943-21.131-60.401-1.888.66 21.131 60.401 1.888-.66Zm-23.018-60.404-21.318 60.401 1.886.666 21.318-60.401-1.886-.666Zm-20.375 61.734h42.449v-2h-42.449v2Zm111.501 25.741h-1v1h1v-1Zm43.945 0h1v-1h-1v1Zm0 17.204v1h1v-1h-1Zm-65.263 0h-1v1h1v-1Zm0-129.965v-1h-1v1h1Zm21.318 0h1v-1h-1v1Zm0 113.761h43.945v-2h-43.945v2Zm42.945-1V159h2v-17.204h-2Zm1 16.204h-65.263v2h65.263v-2Zm-64.263 1V29.035h-2V159h2Zm-1-128.965h21.318v-2h-21.318v2Zm20.318-1v112.761h2V29.035h-2Zm73.806 17.204v-1h-1v1h1Zm0 38.148h-1v1h1v-1Zm44.88 0h1v-1h-1v1Zm0 17.391v1h1v-1h-1Zm-44.88 0v-1h-1v1h1Zm0 39.831h-1v1h1v-1Zm50.49 0h1v-1h-1v1Zm0 17.391v1h1v-1h-1Zm-71.808 0h-1v1h1v-1Zm0-130.152v-1h-1v1h1Zm71.808 0h1v-1h-1v1Zm0 17.391v1h1v-1h-1Zm-51.49 0v38.148h2V46.239h-2Zm1 39.148h44.88v-2h-44.88v2Zm43.88-1v17.391h2V84.387h-2Zm1 16.391h-44.88v2h44.88v-2Zm-45.88 1v39.831h2v-39.831h-2Zm1 40.831h50.49v-2h-50.49v2Zm49.49-1V159h2v-17.391h-2Zm1 16.391h-71.808v2h71.808v-2Zm-70.808 1V28.848h-2V159h2Zm-1-129.152h71.808v-2h-71.808v2Zm70.808-1v17.391h2V28.848h-2Zm1 16.391h-50.49v2h50.49v-2Z"
      mask="url(#a)"
    />
  </svg>
)
export default SvgComponent