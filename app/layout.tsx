import "./globals.css";

export const metadata = {
  title: "Royal Rides | Executive Chauffeur Service in the UK",
  description:
    "Luxury executive chauffeur service across the UK. Premium vehicles, professional drivers, airport transfers and business travel with comfort, privacy and discretion.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
