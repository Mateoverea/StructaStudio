"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Brain, Cloud, Shield, Zap, type LucideIcon } from "lucide-react"

interface Feature {
  name: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    name: "Desarrollo Web a la Medida",
    description: "Creamos sitios optimizados, rápidos y adaptados a las necesidades de tu negocio.",
    icon: Brain,
  },
  {
    name: "Infraestructura Escalable",
    description: "Aprovecha soluciones en la nube para garantizar estabilidad y rendimiento en todo momento.",
    icon: Cloud,
  },
  {
    name: "Seguridad de Nivel Empresaria",
    description: "Protegemos tu sitio con las mejores prácticas en seguridad y encriptación de datos.",
    icon: Shield,
  },
  {
    name: "Optimización y Velocidad",
    description: "Desarrollamos páginas que cargan en milisegundos y maximizan la conversión de clientes.",
    icon: Zap,
  },
]

interface FeatureCardProps {
  feature: Feature
  isVisible: boolean
  index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isVisible, index }) => {
  const isEven = index % 2 === 0
  return (
    <div
      className={`relative overflow-hidden rounded-lg border bg-background p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isEven ? "-translate-x-full" : "translate-x-full"}`
      }`}
    >
      <div className="flex items-center gap-4">
        <feature.icon className="h-8 w-8 text-primary" />
        <h3 className="font-bold text-lg">{feature.name}</h3>
      </div>
      <p className="mt-2 text-muted-foreground">{feature.description}</p>
    </div>
  )
}

const Features: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<Record<number, boolean>>({})
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const featureIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0", 10)
          setVisibleFeatures((prev) => ({ ...prev, [featureIndex]: entry.isIntersecting }))
        })
      },
      { threshold: 0.5 }, // Increased threshold for more precise visibility detection
    )

    const featureElements = featuresRef.current?.querySelectorAll(".feature-card")
    featureElements?.forEach((el) => observer.observe(el))

    return () => {
      featureElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Impulsa tu Negocio con Tecnología de Vanguardia</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
        En Structa Studio, desarrollamos soluciones web que combinan rendimiento, seguridad y escalabilidad para hacer crecer tu negocio en línea.
        </p>
      </div>
      <div ref={featuresRef} className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <div key={feature.name} className="feature-card" data-index={index}>
            <FeatureCard feature={feature} isVisible={visibleFeatures[index]} index={index} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features

