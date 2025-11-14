import React from "react";
import Card from "../components/Card/Card";
import { FiCloud, FiDatabase, FiLock, FiServer } from "react-icons/fi";

export default function CardDemo() {
  const lorem = "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.";

  return (
    <div style={{ padding: 24, display: "grid", gap: 36 }}>
      <h2>Cards</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        <Card title="Easy Deployment">
          {lorem}
        </Card>

        <Card title="Secure by Default" icon={<FiLock size={20} />} iconBg="#f97316">
          {lorem}
        </Card>

        <Card title="Fast Storage" icon={<FiDatabase size={20} />} iconBg="#06b6d4">
          {lorem}
        </Card>

        <Card title="Managed Servers" icon={<FiServer size={20} />} iconBg="#2563eb">
          {lorem}
        </Card>
      </div>

      <h2>Small cards</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48 }}>
        <Card size="sm" title="Secure by Default" icon={<FiLock size={20} />} iconBg="#f97316">
          {lorem}
        </Card>

        <Card size="sm" title="Fast Storage" icon={<FiDatabase size={20} />} iconBg="#06b6d4">
          {lorem}
        </Card>

        <Card size="sm" title="Managed Servers" icon={<FiServer size={20} />} iconBg="#2563eb">
          {lorem}
        </Card>
      </div>
    </div>
  );
}