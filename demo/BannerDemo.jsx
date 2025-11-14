import React from "react";
import Banner from "../components/Banner/Banner";

export default function BannerDemo() {
  const longText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.";

  return (
    <div style={{ padding: 24, display: "grid", gap: 28 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div>
          <h4>MULTI LINE</h4>

          <div style={{ display: "grid", gap: 12 }}>
            <Banner variant="success" title="Congratulations!">
              {longText}
            </Banner>

            <Banner variant="warning" title="Attention">
              {longText}
            </Banner>

            <Banner variant="error" title="There is a problem with your application">
              {longText}
            </Banner>

            <Banner variant="neutral" title="Update available">
              {longText}
            </Banner>
          </div>
        </div>

        <div>
          <h4>SINGLE LINE</h4>

          <div style={{ display: "grid", gap: 12 }}>
            <Banner variant="success" title="Congratulations!" />
            <Banner variant="warning" title="Attention" />
            <Banner variant="error" title="There is a problem with your application" />
            <Banner variant="neutral" title="Update available" />
          </div>
        </div>
      </div>
    </div>
  );
}