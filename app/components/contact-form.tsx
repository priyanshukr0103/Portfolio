"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, FormEvent } from "react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)

    try {
      // For static export, we'll just log to console and show success message
      console.log("Form submission:", formData)

      // In a real app, you would send this data to a backend service
      // For GitHub Pages deployment, you could use a service like Formspree or EmailJS

      setMessage("Thanks for your message! I'll get back to you soon.")

      // Clear the form
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-5 border border-primary/20 dark:border-primary/10 shadow-md hover:shadow-lg transition-shadow rounded-lg bg-card/80 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 text-center">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mt-2">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border-primary/20 dark:border-primary/10 focus:border-primary rounded-md h-10"
              required
            />
          </div>
          <div className="mt-1">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="border-primary/20 dark:border-primary/10 focus:border-primary rounded-md h-10"
              required
            />
          </div>
          <div className="mt-1">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              className="min-h-[110px] border-primary/20 dark:border-primary/10 focus:border-primary rounded-md"
              required
            />
          </div>
          <div className="mt-2">
            <Button
              type="submit"
              className="w-full h-10 text-sm font-medium rounded-md"
              disabled={pending}
            >
              {pending ? "Sending..." : "Send Message"}
            </Button>
          </div>
          {message && (
            <div className={`text-sm text-center mt-2 p-2 rounded-md ${
              message.includes("success")
                ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400"
                : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400"
            }`}>
              {message}
            </div>
          )}
        </form>
      </Card>

      <Card className="p-5 border border-primary/20 dark:border-primary/10 shadow-md hover:shadow-lg transition-shadow rounded-lg bg-card/80 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 text-center">Contact Information</h3>
        <div className="space-y-4 flex flex-col justify-center">
          <div className="mt-2">
            <label className="block text-sm font-medium mb-2">Email</label>
            <a href="mailto:priyanshukr0103@gmail.com" className="text-primary hover:underline flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              priyanshukr0103@gmail.com
            </a>
          </div>
          <div className="mt-1">
            <label className="block text-sm font-medium mb-2">Location</label>
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Chennai, India
            </p>
          </div>
          <div className="mt-1">
            <label className="block text-sm font-medium mb-2">Connect</label>
            <div className="flex gap-5 mt-1">
              <a href="https://github.com/priyanshukr0103" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/priyanshu-kumar-44ab3624b/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://x.com/Priyanshukr__01" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-2">
            <Button
              variant="outline"
              className="w-full h-10 text-sm font-medium rounded-md"
              onClick={() => window.location.href = 'mailto:priyanshukr0103@gmail.com'}
            >
              Email Me
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

