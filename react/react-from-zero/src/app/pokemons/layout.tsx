import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Create by Erick0105",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>Mais Pokemons</p>
      {children}
      <p>Mais Pokemons</p>
    </div>
  );
}