import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from './components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amber-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-amber-700 mb-6">Page non trouvée</h2>
        <p className="text-lg text-amber-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button href="/" variant="primary" size="lg">
          <Home className="mr-2 h-5 w-5" />
          Retour à l'accueil
        </Button>
      </div>
    </div>
  )
}