import { FiCloud } from "react-icons/fi"

export default function Card({
  title,
  children,
  icon = <FiCloud size={20} />,
  iconBg = "#2b6bf6",
  size = "md", // "sm" | "md"
}) {
  return (
    <div className={`card ${size === "sm" ? "card--sm" : ""}`}>
      <div className="card-icon" style={{ backgroundColor: iconBg }}>
        {icon}
      </div>

      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {children && <p className="card-text">{children}</p>}
      </div>
    </div>
  )
}
