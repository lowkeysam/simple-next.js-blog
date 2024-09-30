'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

// Dummy article data
const articles = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    image: "/placeholder.svg?height=200&width=300",
    content: "Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this article, we'll explore the basics of Next.js and how to get started with your first project."
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    image: "/placeholder.svg?height=200&width=300",
    content: "React Hooks have revolutionized the way we write React components. They allow us to use state and other React features without writing a class. This article dives deep into the most commonly used hooks and how they can simplify your React code."
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    image: "/placeholder.svg?height=200&width=300",
    content: "Tailwind CSS is a utility-first CSS framework that can speed up your development process significantly. In this guide, we'll cover the core concepts of Tailwind and show you how to create beautiful, responsive designs with minimal custom CSS."
  }
]

export default function BlogLayout() {
  const [selectedArticle, setSelectedArticle] = useState(articles[0])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Simple Blog</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left sidebar / Navigation */}
        <aside className="w-full md:w-1/4">
          <div className="mb-6">
            <Input type="search" placeholder="Search articles..." className="w-full" />
          </div>
          <nav>
            <h2 className="text-xl font-semibold mb-4">Articles</h2>
            <ul className="space-y-4">
              {articles.map((article) => (
                <li key={article.id}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => setSelectedArticle(article)}
                  >
                    {article.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="w-full md:w-1/2">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
            <Image
              src={selectedArticle.image}
              alt={selectedArticle.title}
              width={300}
              height={200}
              className="w-full h-auto mb-4 rounded-md"
            />
            <p className="text-gray-700">{selectedArticle.content}</p>
          </article>
        </main>

        {/* Right panel */}
        <aside className="w-full md:w-1/4">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {["Web Development", "JavaScript", "React", "CSS"].map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {["nextjs", "react", "tailwind", "typescript"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}