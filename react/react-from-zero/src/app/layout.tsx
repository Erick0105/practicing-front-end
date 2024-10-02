import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My test page",
  description: "Create by Erick0105",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
