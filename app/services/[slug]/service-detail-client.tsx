"use client"

import { motion } from "framer-motion"
import { ThistleDivider } from "@/components/thistle-divider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { serviceDetails, type ServiceSlug } from "@/lib/service-data"

type ServiceDetailProps = {
  service: (typeof serviceDetails)[ServiceSlug]
}

export default function ServiceDetailClient({ service }: ServiceDetailProps) {
  const GOOGLE_CALENDAR_URL =
    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ0vfPFospMogOJuYcXc7z-99U7EP_jaZCQDbPU="

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center mx-auto mb-6">
              <service.icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="mb-6 text-primary">{service.title}</h1>
            <p className="lead">{service.description}</p>
          </motion.div>
        </div>
      </section>

      <ThistleDivider />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6">A Solution-Focused Approach</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>{service.fullDescription}</p>
                  <p>{service.process}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h2 className="mb-6">Common Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-base">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle as="h3" className="h3">
                      Benefits You Can Work Towards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="w-full mt-6">
                        Book a Free Consultation
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle as="h3" className="h3">
                      Related Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.relatedServices.map((slug) => (
                        <Link key={slug} href={`/services/${slug}`}>
                          <Badge variant="secondary" className="hover:bg-primary/20">
                            {serviceDetails[slug as ServiceSlug].title}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
