import HoverText from "../components/HoverText/HoverText";
import Tooltip from "../components/Tooltip/Tooltip";

export default function TooltipDemo() {
  return (
    <div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. <HoverText title="More information" text="Amet feugiat est integer.">Amet feugiat</HoverText> est integer <HoverText title="Dollar actor" text="Dollar actor adipiscing nunc urna, sit.">dollar actor</HoverText> adipiscing nunc urna, sit.</div>
      <div style={{ padding: 24, display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))" }}>
        <Tooltip color="black" variant="bold" />
        <Tooltip color="black" variant="light" />
        <Tooltip color="blue" variant="bold" />
        <Tooltip color="blue" variant="light" />
        <Tooltip color="purple" variant="bold" />
        <Tooltip color="purple" variant="light" />
        <Tooltip color="green" iconColor="#C1FFCF" variant="bold" />
        <Tooltip color="green" variant="light" />
      </div>
      <div>Lorem ipsum dolor sit amet, <HoverText>consectetur adipiscing elit</HoverText>. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</div>
    </div>
  );
}