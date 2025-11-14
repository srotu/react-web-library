import Badge from "../components/Badge/Badge";
import { FiLink, FiCheck, FiInfo, FiAlertTriangle } from "react-icons/fi";

export default function BadgeDemo() {
  const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];

  return (
    <div style={{ padding: 24, display: "grid", gap: 20 }}>
      <div>
        <h3 style={{ margin: "0 0 8px 0" }}>Default</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {colors.map((c) => (
            <Badge key={c} color={c}>
              Badge
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3>Pill badges</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {colors.map((c) => (
            <Badge key={c} color={c} pill>
              Badge
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3>With icons</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge color="green" icon={<FiCheck size={12} />}>
            Success
          </Badge>
          <Badge color="red" icon={<FiAlertTriangle size={12} />}>
            Alert
          </Badge>
          <Badge color="blue" icon={<FiInfo size={12} />}>
            Info
          </Badge>
          <Badge color="purple" icon={<FiCheck size={12} />} pill>
            Verified
          </Badge>
        </div>
      </div>

      <div>
        <h3>Different sizes</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge color="indigo" size="sm" icon={<FiLink size={10} />}>
            Small
          </Badge>
          <Badge color="indigo" size="md" icon={<FiLink size={12} />}>
            Medium
          </Badge>
          <Badge color="indigo" size="lg" icon={<FiLink size={14} />}>
            Large
          </Badge>
        </div>
      </div>
    </div>
  );
}