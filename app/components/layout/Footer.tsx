import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">MaisonPartout</h3>
            <p>La meilleure façon de gérer votre location saisonnière.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-orange-300 transition duration-300">À propos</Link></li>
              <li><Link href="#" className="hover:text-orange-300 transition duration-300">Services</Link></li>
              <li><Link href="#" className="hover:text-orange-300 transition duration-300">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>Email: info@maisonpartout.fr</p>
            <p>Téléphone: 01 23 45 67 89</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-800 text-center">
          <p>&copy; {new Date().getFullYear()} MaisonPartout. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}