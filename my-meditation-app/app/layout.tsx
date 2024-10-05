// app/layout.tsx
import ClientWrapper from '../components/ClientWrapper';
import './globals.css'; // Certifique-se de ter estilos globais configurados

// app/layout.tsx

export const metadata = {
  title: 'Meditação Moderna',
  description: 'Encontre a paz interior com técnicas modernas de meditação.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="transition-colors duration-500 ease-in-out bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
        <ClientWrapper />
        {children}
      </body>
    </html>
  );
}
