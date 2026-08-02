import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card that appears when the site is shared on LinkedIn, WhatsApp, X or
 * Slack. Generated rather than a static file, so it can never drift out of sync
 * with the title and role in `siteConfig`.
 *
 * Rendered by Satori, which supports a deliberate subset of CSS: flexbox only,
 * every multi-child element needs an explicit `display: flex`, and there is no
 * cascade. Hence the verbose inline styles.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#191917",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              background: "#8fbdb6",
            }}
          />
          <div
            style={{
              color: "#8fbdb6",
              fontSize: "24px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            {/* One interpolated string, not `{expr} + text`: Satori counts
                those as two child nodes and rejects the element. */}
            {`${siteConfig.location.country} · Remote worldwide`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#efeee9",
              fontSize: "104px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              color: "#8fbdb6",
              fontSize: "52px",
              fontWeight: 600,
              marginTop: "12px",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.jobTitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(239,238,233,0.18)",
            paddingTop: "32px",
          }}
        >
          <div style={{ color: "rgba(239,238,233,0.65)", fontSize: "30px" }}>
            React · Next.js · TypeScript · Flutter
          </div>
          <div style={{ color: "rgba(239,238,233,0.45)", fontSize: "28px" }}>
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
