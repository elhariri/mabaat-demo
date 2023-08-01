export default function Squircle() {
  return (
    <svg
      /*  style={{
        filter: "drop-shadow(0px 3px 10px rgb(0 0 0 / 0.2))",
      }} */
      viewBox="0 0 190 190"
      xmlns="http://www.w3.org/1600/svg"
      version="1.1"
    >
      <defs>
        <pattern
          id="squircle"
          patternUnits="userSpaceOnUse"
          width="160"
          height="160"
        >
          <image
            xlinkHref="/icons/mabaat.svg"
            x="0"
            y="0"
            width="160"
            height="160"
          />
        </pattern>
      </defs>
      <path
        d="
M 0 90
C 0 22.5, 22.5 0, 90 0
S 180 22.5, 180 90, 157.5 180
90 180, 0 157.5, 0 90
"
        transform="
rotate(
0,
90,
90
)
translate(
0,
0
)

"
        fill="#ffd863"
      ></path>
      <path
        style={{
          filter: "drop-shadow(0px 0px 2px rgb(0 0 0 / 0.5)), contrast(1.75)",
          border: "1px solid gray",
        }}
        fill="url(#squircle)"
        d="
    M 0 80
    C 0 20, 20 0, 80 0
    S 160 20, 160 80, 140 160
    80 160, 0 140, 0 80
    "
        transform="
    rotate(
    0,
    80,
    80
    )
    translate(
    10,
    10
    )
    "
      ></path>
    </svg>
  );
}
