import { SVGProps } from "react"

export const X = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M18.968 1h3.68l-8.08 9.2 9.44 12.48H16.6l-5.8-7.584-6.64 7.584H.48l8.56-9.84L0 1h7.592l5.24 6.928L18.968 1ZM17.68 20.52h2.04L6.52 3.08H4.328L17.68 20.52Z"
        fill="currentcolor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentcolor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
