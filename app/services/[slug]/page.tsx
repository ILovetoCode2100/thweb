import { serviceDetails, type ServiceSlug } from "@/lib/service-data"
import { notFound } from "next/navigation"
import ServiceDetailClient from "./service-detail-client"

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }))
}

export default function ServiceDetailPage({ params }: { params: { slug: ServiceSlug } }) {
  const service = serviceDetails[params.slug]

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
