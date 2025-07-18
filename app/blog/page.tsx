"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ThistleDivider } from "@/components/thistle-divider"

const blogPosts = [
  {
    id: 1,
    title: "The Neuroscience of Performance Anxiety: How Hypnotherapy Rewires Your Brain for Confidence",
    slug: "neuroscience-of-performance-anxiety",
    excerpt:
      "Dive deep into the brain science behind why we feel anxious and discover how targeted hypnotherapy can create new, confident neural pathways.",
    category: "Anxiety & Stress",
    date: "2025-07-15",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "A Path to Confidence: A Case Study on Overcoming Presentation Anxiety",
    slug: "case-study-presentation-anxiety",
    excerpt:
      "Follow the journey of 'Alex', a fictional client archetype, and see the step-by-step hypnotherapy process used to transform presentation fears into authentic confidence.",
    category: "Confidence",
    date: "2025-07-10",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "Beyond 'Just Relax': What Really Happens in a Hypnotherapy Session?",
    slug: "what-happens-in-a-session",
    excerpt:
      "Demystify the process of clinical hypnotherapy. This article breaks down what you can expect from your first session and debunks common myths.",
    category: "Hypnotherapy 101",
    date: "2025-07-05",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6 text-primary">Insights from the Mind</h1>
            <p className="lead">
              Explore articles on hypnotherapy, personal growth, and the science of change to empower your journey.
            </p>
          </motion.div>
        </div>
      </section>

      <ThistleDivider />

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6 flex-grow">
                    <p className="text-sm text-primary font-semibold mb-2">{post.category}</p>
                    <h3 className="mb-4 line-clamp-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-4 flex-grow">{post.excerpt}</p>
                  </div>
                  <div className="p-6 bg-primary/5 border-t">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
