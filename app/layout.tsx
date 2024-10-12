import { Montserrat } from 'next/font/google'
import './styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'MaisonPartout - Louez votre logement en toute sérénité',
  description: 'MaisonPartout gère votre location saisonnière de A à Z. Profitez de la vie pendant que nous nous occupons de votre bien.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}