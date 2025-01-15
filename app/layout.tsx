import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
    src: [
        {
            path: './fonts/WorkSans-Black.ttf',
            weight: '900',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-ExtraBold.ttf',
            weight: '800',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Semibold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-Thin.ttf',
            weight: '200',
            style: 'normal'
        },
        {
            path: './fonts/WorkSans-ExtraLight.ttf',
            weight: '100',
            style: 'normal'
        },
    ],
    variable: '--font-work-sans',
})

const dmMono = localFont({
  src: [
    {
      path: './fonts/DMMono-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/DMMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/DMMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-dmmono',
});

export const metadata: Metadata = {
  title: "TRIONN | Crafting Award-Winning Digital Journeys.",
  description: "Trionn® - Redefining Digital Creativity: Your Partner for UI/UX, Mobile App, Web App, Branding, Creative Website Design, and Custom Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body
            className={`${workSans.variable} ${dmMono.variable}`}
          >
            {children}
          </body>
    </html>
  );
}