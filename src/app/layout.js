
import "./globals.css";

export const metadata = {
  title: "BARA | Indonesian Coconut Charcoal Manufacturer & Exporter",
  description:
    "Premium Indonesian coconut shell charcoal briquettes for global wholesalers, importers, and distributors.",


    icons: {
      icon: [
        { url: "/favicon.PNG", type: "image/png" },
      ],
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
