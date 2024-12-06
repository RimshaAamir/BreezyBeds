import "./globals.css";
import Footer from "@/components/footer/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= "antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
