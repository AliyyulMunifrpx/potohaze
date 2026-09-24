import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { data } from "../../data/person.js";
import SmoothScroll from "../components/smooth-scroll.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theSeasons = localFont({
  src: [
    {
      path: "../../public/fonts/The Seasons Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/The Seasons Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/The Seasons Light Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/The Seasons Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-the-seasons",
});

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});
export const metadata = {
  metadataBase: new URL(data.weburl),

  title: {
    default: `${data.name} — Fotografi Wisuda ${data.location}`,
    template: `%s | ${data.name}`,
  },

  description: `${data.name} adalah jasa fotografi wisuda di ${data.location} yang mengabadikan momen kelulusan dengan foto yang personal, elegan, dan berkesan.`,

  keywords: [
    `fotografer wisuda ${data.location}`,
    `fotografi wisuda ${data.location}`,
    `jasa foto wisuda ${data.location}`,
    `foto wisuda ${data.location}`,
    `fotografer ${data.location}`,
    `jasa fotografer ${data.location}`,
    "fotografer wisuda Yogyakarta",
    "foto wisuda Yogyakarta",
    "jasa foto wisuda Yogyakarta",
    data.name,
  ],

  authors: [
    {
      name: data.name,
      url: data.weburl,
    },
  ],

  creator: data.name,
  publisher: data.name,

  alternates: {
    canonical: data.weburl,
  },

  openGraph: {
    title: `${data.name} — Fotografi Wisuda ${data.location}`,
    description: `Abadikan cerita wisudamu bersama ${data.name}. Fotografi wisuda dengan pendekatan personal, elegan, dan timeless di ${data.location}.`,
    url: data.weburl,
    siteName: data.name,
    locale: "id_ID",
    type: "website",

    images: [
      {
        url: "/assets/og/potohaze-og.webp",
        width: 1200,
        height: 630,
        alt: `${data.name} — Fotografi Wisuda ${data.location}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${data.name} — Fotografi Wisuda ${data.location}`,
    description: `Fotografi wisuda di ${data.location} untuk mengabadikan momen kelulusanmu.`,
    images: ["/assets/og/potohaze-og.webp"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "photography",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${theSeasons.variable}
        ${helvetica.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-[100dvh] flex flex-col">
        <SmoothScroll />

        <Navbar />

        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
