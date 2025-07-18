"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "./actions"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactPage() {
  const initialState = { message: null, errors: {} }
  const [state, dispatch] = useActionState(submitContactForm, initialState)
  const GOOGLE_CALENDAR_URL =
    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ0vfPFospMogOJuYcXc7z-99U7EP_jaZCQDbPU="

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-primary">Get in Touch</h1>
          <p className="mt-6 lead mx-auto">Have a question or ready to start your journey? I'm here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-card/70">
              <CardHeader>
                <CardTitle>Book a Free Consultation</CardTitle>
                <CardDescription>
                  The easiest way to get started is to book a free, no-obligation initial consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We can discuss your goals, answer your questions, and see if we're a good fit to work together.
                </p>
                <Link href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Go to Booking Page</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card/70">
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+447801279880"
                    className="text-gray-700 font-medium hover:text-primary transition-colors"
                  >
                    +44 7801 279880
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:morven@tayloredhypnotherapy.com"
                    className="text-gray-700 font-medium hover:text-primary transition-colors"
                  >
                    morven@tayloredhypnotherapy.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">3 Ennis Park, Polbeth, West Calder EH55 8TN</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/70 lg:self-start">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>For general inquiries, please use the form below.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={dispatch} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required />
                  {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                  {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required />
                  {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
                {state.message && !state.errors && <p className="text-green-600 text-sm mt-2">{state.message}</p>}
                {state.message && state.errors && Object.keys(state.errors).length > 0 && (
                  <p className="text-red-500 text-sm mt-2">{state.message}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
