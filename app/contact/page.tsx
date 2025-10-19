"use client"

import type React from "react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:analytic@stern.nyu.edu?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance mx-auto">
            get in touch<span className="header-period">.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl leading-relaxed text-pretty mx-auto">
            Have questions about joining BAC or want to collaborate on a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-border/60 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">
                    email<span className="header-period">.</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">analytic@stern.nyu.edu</p>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <MessageSquare className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">
                    social media<span className="header-period">.</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Follow us on LinkedIn, Instagram, and Twitter for updates and events.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/60 bg-card shadow-lg">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-3xl">
                    send us a message<span className="header-period">.</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">name</Label>
                        <Input
                          id="name"
                          placeholder="your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">subject</Label>
                      <Input
                        id="subject"
                        placeholder="what's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">message</Label>
                      <Textarea
                        id="message"
                        placeholder="tell us more..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto font-medium shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      send message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
