import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Priz · Presença digital e infraestrutura para pequenos negócios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/priz-logo.svg"), "base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0a0a0a",
          color: "#f0f0ea",
        }}
      >
        <img src={`data:image/svg+xml;base64,${logo}`} width={194} height={100} alt="" />
        <div style={{ fontSize: 64, lineHeight: 1.1, letterSpacing: -2, marginTop: 56, maxWidth: 940 }}>
          Presença digital e infraestrutura para pequenos negócios.
        </div>
        <div style={{ fontSize: 28, color: "#888882", marginTop: 28 }}>
          Sites · Google · Instagram · Automações · Servidores
        </div>
      </div>
    ),
    size,
  );
}
