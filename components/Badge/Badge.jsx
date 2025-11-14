import classNames from "classnames";

const ALLOWED_COLORS = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];
const ALLOWED_SIZES = ["sm", "md", "lg"];

export default function Badge({
    children,
    color = "blue",
    size = "lg",
    pill = false,
    icon = null
}) {
  const colorClass = ALLOWED_COLORS.includes(color) ? `badge-${color}` : "badge-blue"
  const sizeClass = ALLOWED_SIZES.includes(size) ? `badge-${size}` : "badge-md"
  const pillClass = pill ? "badge-pill" : ""
  const classes = classNames("badge", colorClass, sizeClass, pillClass)

  return (
    <span className={classes}>
      {icon ? <span className="badge-icon">{icon}</span> : null}
      <span>{children}</span>
    </span>
  )
}
