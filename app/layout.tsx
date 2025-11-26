import type { Metadata } from "next";
import { Playfair_Display, Karla } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duport Bistrô e Café | Cafés especiais e culinária caseira",
  description:
    "Duport Bistrô e Café em Santos. Cafés especiais, bolos, refeições caseiras e ambiente acolhedor. Visite-nos na Rua Oswaldo Cruz, 500.",
  keywords: [
    "cafeteria",
    "bistrô",
    "café especial",
    "lanches artesanais",
    "cafés em Santos",
    "culinária caseira",
    "Duport Bistrô e Café",
  ],
  authors: [{ name: "Duport Bistrô e Café" }],
  metadataBase: new URL("https://www.duportcafeteria.com.br"),
  openGraph: {
    title: "Duport Bistrô e Café",
    description:
      "Cafés especiais, ambiente acolhedor, bolos e refeições diárias. Conheça o Duport Bistrô e Café em Santos.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.duportcafeteria.com.br/",
    siteName: "Duport Bistrô e Café",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duport Bistrô e Café",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duport Bistrô e Café",
    description:
      "Cafés especiais, bolos, refeições e aconchego em Santos.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.duportcafeteria.com.br/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Duport Bistrô e Café",
              image: "https://www.duportcafeteria.com.br/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Oswaldo Cruz, 500",
                addressLocality: "Santos",
                addressRegion: "SP",
                postalCode: "11045100",
                addressCountry: "BR",
              },
              openingHours: "Mo-Sa 09:00-19:00",
              servesCuisine: ["Café", "Culinária caseira", "Bolos", "Refeições"],
              telephone: "+55 13 00000-0000",
              url: "https://www.duportcafeteria.com.br",
            }),
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WNQ8DBST');
            `,
          }}
        />

        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LMLQK42587"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LMLQK42587');
            `,
          }}
        />
        {/* End Google Analytics */}
      </head>

      <body className={`${playfair.variable} ${karla.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNQ8DBST"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
