import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Structa Studio</h2>
          <p className="text-sm text-muted-foreground">Pioneros en soluciones de software</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Soluciones</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/ai-analytics" className="text-muted-foreground transition-colors hover:text-primary">
                  Analíticas
                </Link>
              </li>
              <li>
                <Link href="/cloud-services" className="text-muted-foreground transition-colors hover:text-primary">
                  Servicion en la nube
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Structa Studio. Derechos reservados.
        </p>
      </div>
    </footer>
  )
}

